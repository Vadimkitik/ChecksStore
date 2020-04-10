import { Component, Input } from '@angular/core';
import { Check } from '../models/check';
@Component({
    selector: "check-form",
    templateUrl: './check-form.component.html',
    styleUrls: ['./check-form.component.css']
})
export class CheckFormComponent {
    @Input() check: Check;
}