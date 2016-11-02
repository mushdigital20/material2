import { Directive } from '@angular/core';


export abstract class MdShowHideDirective {
    constructor() { }
}

@Directive({})
export class MdShowXl extends MdShowHideDirective {

    constructor() {
        super();
    }
}
