import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // @HostListener('focus') onFocus(){
  //     console.log("on Focus");
  // }

  // @Input('format') format;
  @Input('appInputFormat') format;

  // private el : ElementRef is a service defined in angular that gives us access in DOM object
  constructor(private el: ElementRef) { }
  
  @HostListener('blur') onBlur(){
    // console.log("on Blur");
    let value: string  = this.el.nativeElement.value;

    if(this.format == "lowercase")
      this.el.nativeElement.value = value.toLowerCase();
    else 
      this.el.nativeElement.value = value.toUpperCase();
  }
}
