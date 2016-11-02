import { Component } from '@angular/core';
import { MdLayoutService } from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'layout-demo',
    templateUrl: 'layout-demo.html',
    styleUrls: ['layout-demo.scss'],
})
export class LayoutDemo {
    constructor(private layout: MdLayoutService) { }
}
