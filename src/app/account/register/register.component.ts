import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm() {
    this.registerForm = new FormGroup({
      FullName: new FormControl('', Validators.required),
      UserName: new FormControl('', Validators.required),
      EmailId: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
      PhoneNo: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.accountService.register(this.registerForm.value).subscribe(
      (res) => {
        if (res) this.router.navigateByUrl('account/login');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
