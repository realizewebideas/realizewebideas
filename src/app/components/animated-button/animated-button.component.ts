import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-button',
  templateUrl: './animated-button.component.html',
  styleUrls: ['./animated-button.component.css']
})
export class AnimatedButtonComponent implements OnInit {

  @Input()
  contents: String = ""

  @Input()
  onClickHandler: (()=>void) | undefined = undefined 

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    if(this.onClickHandler)
      this.onClickHandler()
  }

}
