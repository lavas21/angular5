import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  frmConfig = [
    {type:"text",name:'userName',label:'User Name',constraint:Validators.required},
    {type:"password",name:'pwd',label:'Password',constraint:Validators.required}
  ]
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(): FormGroup{
    sessionStorage.clear();
    this.loginForm = new FormGroup({});
    this.frmConfig.forEach(eachctrl =>{
      this.loginForm.addControl(eachctrl.name,new FormControl('',eachctrl.constraint));
    });
    return this.loginForm;
  }

  submit(){
    console.log(this.loginForm.value);
    sessionStorage.setItem("isLogin",'Y');
    this.router.navigateByUrl('/donar');//without params
  }
}
