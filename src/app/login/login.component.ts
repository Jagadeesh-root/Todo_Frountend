import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'jag'
  password = ''
  invalidLogin = false
  constructor(private router: Router, private hardcodedAuthenticatedService: HardcodedAuthenticationService,
    private basicAuthenticatedService: BasicAuthenticationService
  ) { }

  ngOnInit(): void {
  }
  handleLogin() {
    if (this.hardcodedAuthenticatedService.authenticate(this.username, this.password)) {
      this.invalidLogin = false
      this.router.navigate(['welcome', this.username])
     
    }
    else {
      this.router.navigate(['error'])
      this.invalidLogin = true
    }


  }
  handleJWTAuthlogin() {
    this.basicAuthenticatedService.executeJWTAuthenticationService(this.username, this.password)
    .subscribe(

      data => { console.log(data)
        this.router.navigate(['welcome',this.username])
        this.invalidLogin = false
    
     

    },
    error => {
      console.log(error)
      this.invalidLogin = true
    }
    )
  

  }

}
