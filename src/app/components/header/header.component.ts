import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  myName: string = 'Veljko Mijovic Uskovic';

  @ViewChild('dropMenu', { static: false, read: NgbDropdown})
  dropDownMenuRef!: NgbDropdown;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  scrollTo(target: string) {
    const el = document.getElementById(target);
    el?.scrollIntoView();
  }

  // onHover(event: any){
  //     console.log(this.dropDownMenuRef);
  //     this.dropDownMenuRef.toggle()
  // }

}
