import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from 'src/app/models/project';
import { ITask } from 'src/app/models/task';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  @Input() id!: string;
  task!: ITask;
  constructor(
    private projectService: ProjectService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    let id = this.activateRoute.snapshot.paramMap.get('id');

    this.projectService.taskList(id).subscribe(
      (task) => {
        this.task = task;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
