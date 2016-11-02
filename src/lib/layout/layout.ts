import { NgModule, ModuleWithProviders } from '@angular/core';
import { MdLayoutService } from './service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
})
export class MdLayoutModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MdLayoutModule,
            providers: [
                MdLayoutService
            ]
        };
    }
}
