import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login_Form:any;
  constructor(private form_builder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.login_Form = this.form_builder.group({
      name:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }
  Login_Submit(){
    let login_details = [{name:'admin', password:'password'}]
    let login_result = login_details.map(x=>[x.name, x.password])
    console.log(login_result)
    let form_name = this.login_Form.value
    console.log(form_name)
    for(let key of login_result){
      if(key[0]==form_name.name && key[1]==form_name.password){
        this.router.navigate(['dashboard'])
        localStorage.setItem('all_users',JSON.stringify(login_details))
      }
    }

  }
}
