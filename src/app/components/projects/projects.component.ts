import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Input()
  projectsList: Array<Project> = [];

  constructor() { }

  ngOnInit(): void {
  }
}
