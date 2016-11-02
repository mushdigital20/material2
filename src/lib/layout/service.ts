import { Injectable, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs/Observable/fromEvent';
import * as debounceTime from 'rxjs/add/operator/debounceTime';
import * as  distinct from 'rxjs/add/operator/distinct';

import { MEDIA } from './constants';

@Injectable()
export class MdLayoutService {

    private _queries: any = {};
    private _mqls: any = {};
    private _results: any = {};
    private _normalizeCache: any = {};

    constructor() {

        // subscribes to screen load event
        fromEvent(window, 'onload')
            .subscribe((event: any) => this._checkQueryChange(event));

        // subscribes to screen resize event
        fromEvent(window, 'resize')
            .subscribe((event: any) => this._checkQueryChange(event));
    }

    mdMedia(query: string): EventEmitter<boolean> {
        var validated = this._queries[query];
        if (validated === undefined) {
            validated = this._queries[query] = this._validate(query);
        }

        var result = this._results[validated];
        if (result === undefined) {
            result = this._add(validated);
        }

        return result;
    }

    private _validate(query: string): string {
        return MEDIA[query] ||
            ((query.charAt(0) !== '(') ? ('(' + query + ')') : query);
    }

    private _add(query: string): EventEmitter<boolean> {
        var mql = this._mqls[query];
        if (!mql) {
            mql = this._mqls[query] = window.matchMedia(query);
        }

        console.log(mql.media);
        this._results[mql.media] = new EventEmitter<boolean>();
        // result.addListener(this._onQueryChange);
        return this._results[mql.media];
    }

    private _checkQueryChange(event: any): void {
        Object.keys(this._mqls).forEach(key => {
            let mql: any = this._mqls[key];
            console.log(this._results[mql.media]);
            this._results[mql.media].next(mql.matches);
        });
    }
}
