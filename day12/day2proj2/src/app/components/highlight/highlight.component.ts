import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  private el = inject(ElementRef);

  @HostListener('mouseenter')
  onmouseenter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.el.nativeElement.style.backgroundColor = 'white';
  }
}
