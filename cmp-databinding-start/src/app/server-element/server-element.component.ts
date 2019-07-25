import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, ViewChildren, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: {type: string, name:string, content: string};
  @ContentChild('contentParagraph',{ static: true }) paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
   }

  ngOnChanges(changes: SimpleChanges): void {    
    console.log('ngOnChanges called');
  }

  ngOnInit() {
    console.log('ngoninit called');
  }

}
