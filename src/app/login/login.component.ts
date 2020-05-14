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
  data: any;
  
 
  constructor(private service:BackgroundService, private router:Router, private app1:AppComponent) { 
  }


  ngOnInit(): void {
  }

  fetchEmployee(){
    this.service.getlogindetails(this.empId,this.password).subscribe((data:any)=>{this.login_details=data
    console.log(data);
    if(this.login_details == null){
     alert("login unsuccessfull");
     this.check1=true;
     this.check=false;
    }
    else{
      alert("login successfull");
      this.check1=false;
      this.check=true;
      //this.router.navigate(['app-search-by-id']);
      //this.router.navigate(['app-search-by-name']);
      this.app1.validate();
    }
  });
}

}
