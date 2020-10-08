import { Directive, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef ) {
    elementRef.nativeElement.style.backgroundColor = 'red';
  }

}
