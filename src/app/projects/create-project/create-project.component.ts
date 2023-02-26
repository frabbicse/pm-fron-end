import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  projectForm!: FormGroup;
  submitted = false;
  @ViewChild('closebutton') closebutton: any;
  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.createProjectForm();
  }
  createProjectForm() {
    this.projectForm = new FormGroup({
      name: new FormControl('', Validators.required),
      projectTypeId: new FormControl('', Validators.required),
      description: new FormControl(''),
    });
  }

  get projectFormControls() {
    return this.projectForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.projectForm.valid) {
      this.projectService.createProject(this.projectForm.value).subscribe(
        (res) => {
          if (res) {
            this.router.navigateByUrl('/dashboard');
            this.closebutton.nativeElement.click();
          }
        },
        (error) => {
          console.log(error);
          this.closebutton.nativeElement.click();
        }
      );
    }
  }
}
