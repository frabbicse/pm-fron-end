import { Component, Input, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project!:IProject;

  constructor() { }

  ngOnInit(): void {
  }

}
