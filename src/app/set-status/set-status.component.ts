import { Component, OnInit } from '@angular/core';
import { VerificationDto, BackgroundService } from '../background.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-status',
  templateUrl: './set-status.component.html',
  styleUrls: ['./set-status.component.css']
})
export class SetStatusComponent implements OnInit {

  verification:VerificationDto = new VerificationDto(0,"");

  private router:Router
  message:string;
  constructor(private service:BackgroundService,router:Router) { 
    this.router=router;
  }

  ngOnInit(): void {  
  }
  
  status(){
    if(this.verification.empid != 0 && this.verification.status != ""){
      this.service.setstatus(this.verification).subscribe((data)=>this.message=data);
      this.router.navigate(['app-search-by-id']);
      
  }
  else{
    this.message = "employee status was not set";
  }
  } 
}

























