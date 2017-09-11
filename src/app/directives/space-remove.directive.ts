import {Directive, ElementRef, Output, EventEmitter, HostListener, OnInit, Input} from '@angular/core';

@Directive({
  selector: '[appSpaceRemove]',
 })
export class SpaceRemoveDirective implements OnInit {

  private value: any;
  private el: HTMLInputElement;

  private checkStr = function () {
    let newValue = '';
    if (!this.value.length) return;
    for (let i = 0; i < this.value.length; i++) {
      if ( this.value[i] != ' ' ) {
        newValue = newValue + this.value[i];
      }
    }
    this.value = newValue;
    this.value = this.value.toUpperCase();
    this.ngModelChange.emit(this.value);
  };


  @Input() ngModel;
  @Output() ngModelChange: EventEmitter <any> = new EventEmitter();

  @HostListener('keyup') onM() {
    this.value = this.el.value;
    this.checkStr();
  }

  constructor(
    private elementRef: ElementRef,
  ) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.value = this.ngModel;

    // this.checkStr();

    setTimeout(() => {
      this.checkStr();
    }, 100);

  }

}



