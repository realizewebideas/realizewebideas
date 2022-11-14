import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  @Input() public project: Project | null = null

  constructor() { }

  ngOnInit(): void {
  }

  
  public onClickListenerHandler(): void{
    window.open(this.project?.link.toString(), "_blank")
  }

}
