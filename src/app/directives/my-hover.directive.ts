import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appMyHover]'
})
export class MyHoverDirective {

  @Input('appMyHover')
    private color: string;

  @Input('nextColor')
    private nextColor: string;


  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight( this.color );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.nextColor);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
