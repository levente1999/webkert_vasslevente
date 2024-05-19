import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');


  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
  }

  async login() {
    
      this.authService.login(this.email.value as string, this.password.value as string).then(cred => {
        console.log(cred);
        console.log("Sikeres bejelentkezés!");
        this.router.navigateByUrl('/jarmu');
      }).catch(error => {
        console.error(error);
        
      });
  }


}
