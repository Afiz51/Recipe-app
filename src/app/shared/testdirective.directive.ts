import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[testDirective]',
})
export class TestDirective {
  @HostBinding('class.testClass') isAttach = false;
  @HostListener('click') toggleAttach() {
    this.isAttach = !this.isAttach;
  }
}
