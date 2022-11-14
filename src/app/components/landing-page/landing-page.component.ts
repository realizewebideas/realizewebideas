import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  showTeam: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  animatedButtonClick(){
    this.showTeam = true;
  }

}
