import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  projects!: IProject[];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.projectList().subscribe((resp: any) => {
      console.log(resp);

      this.projects =resp;
    });
  }
}
