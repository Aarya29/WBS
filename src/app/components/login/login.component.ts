import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email : new FormControl(''),
    password: new FormControl('')
  })
  constructor(private auth: AuthService, private router:Router) {}

  ngOnInit(): void {
    if(this.auth.isLogedIn()) {
      this.router.navigate(['work-project']);
    }
  }

  onSubmit(){
    console.log(this.loginForm.value);
    if(this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          this.router.navigate(['work-project']);
        }
      )
    }
  }
}
