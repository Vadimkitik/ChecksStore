import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
 selector: '[appDropown]'
})
export class DropdownDirectice {

    @HostBinding('class.open') isOpen = false;

    @HostListener('click') onClick() {
        this.isOpen = !this.isOpen;
    }
}