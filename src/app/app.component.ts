import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  emailid;
  formdata;
  ngOnInit(){

    this.formdata=new FormGroup({
      emailid:new FormControl("",Validators.compose([
Validators.required,
Validators.pattern("[^@]*@[^@]*")


      ])),
      passwd:new FormControl("")
    });
  }
  onClickSubmit(data){
    this.emailid = data.emailid;}
}
