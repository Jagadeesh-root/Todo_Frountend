import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient

  ) { }

  executeHelloBeanService() {
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean/jag")
    //console.log("heelooo")

  }

  executeHelloWorldServiceWithPathVariable(name) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHeader();
    // let   headers =  new HttpHeaders({
    //     Authorization: basicAuthHeaderString

    // })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
      //{headers}
    );
  }

  // createBasicAuthenticationHeader(){
  //   let username = 'jag'
  //   let password = '123'
  //   let basicAuthHeaderString= 'Basic '+ window.btoa(username + ':' + password);
  // return basicAuthHeaderString;
  // }


}
