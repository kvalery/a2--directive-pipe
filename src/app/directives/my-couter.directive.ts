import {
  Directive, ElementRef, EventEmitter, HostListener, Output, ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appMyCouter]'
})
export class MyCouterDirective {

  public counter = 0;

  constructor(
    private el: ElementRef,
    // private templateRef: TemplateRef<any>,
    // private viewContainer: ViewContainerRef,
  ) { }

  @HostListener('click', ['$event']) onC(click) {
    ++this.counter;
    console.log( this.el.nativeElement);
    this.counterNum.emit(this.counter);
  }

  @Output()
  public counterNum: EventEmitter<any> = new EventEmitter;

}
