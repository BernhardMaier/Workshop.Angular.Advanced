import { Directive, OnChanges, SimpleChanges, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[orderBtn]'
})
export class OrderBtnDirective implements OnChanges {
  orderBtnElement: HTMLButtonElement = document.createElement('button');
  @Input() orderBtn;

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.appendChild(this.orderBtnElement);
    this.orderBtnElement.onclick = () => {
      console.log(`this.orderBtn: ${this.orderBtn}`)
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.orderBtnElement.innerText = this.orderBtn;
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseenter');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('mouseleave');
  }
}
