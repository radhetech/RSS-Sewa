import { Directive, ElementRef, HostListener, Renderer2, inject } from "@angular/core"

@Directive({
    selector: '[appHighLight]'
  })
  export class HighLightDirective {
  
    constructor() { }
  el:ElementRef=inject(ElementRef)
  renderer:Renderer2 = inject(Renderer2)
  
  @HostListener('mouseover') onmouseOver(){
    this.renderer.addClass(this.el.nativeElement, 'highLightService')
  }
  @HostListener('mouseout') mouseOut(){
    this.renderer.removeClass(this.el.nativeElement,'highLightService')
  }
  }
  