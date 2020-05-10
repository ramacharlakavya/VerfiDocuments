import { Component, OnInit } from '@angular/core';
import { LoginDto, BackgroundService } from '../background.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  empId:number;
  password:string;

  login_details:any;
  message:string;
  
  check:boolean = false;
  check1:boolean = false;
  
 
  constructor(private service:BackgroundService, private router:Router, private app1:AppComponent) { 
  }


  ngOnInit(): void {
  }
  fetchEmployee(){
    this.service.getlogindetails(this.empId,this.password).subscribe((data)=>this.login_details=data);
    if(this.login_details != null){
     alert("login unsuccessfull");
    }
    else{
      alert("login successfull")
      //this.router.navigate(['app-search-by-id']);
      //this.router.navigate(['app-search-by-name']);
      this.app1.validate();
    }
  }

}
