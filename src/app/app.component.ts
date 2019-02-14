import {ApplicationRef, ChangeDetectorRef, Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>{{title}}</h1>
        <button (click)="onBtnClick($event)">Change name</button>
    `,
    styles: []
})
export class AppComponent {
    title = 'Georgy';

    constructor(private application: ApplicationRef) {
    }

    onBtnClick($event) {
        this.title = this.title == 'Georgy' ? 'Iliya' : 'Georgy';
        this.application.tick();
    }

}
