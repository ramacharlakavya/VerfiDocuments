import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../background.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-by-id',
  templateUrl: './search-by-id.component.html',
  styleUrls: ['./search-by-id.component.css']
})
export class SearchByIdComponent implements OnInit {
 
  empid:number;
  emp_docdetails:any;
  message:string;
  private router:Router;

  check:boolean = false;
  check1:boolean = false;
  
  constructor(private service:BackgroundService,router:Router) { 
    this.router=router;
  }


  ngOnInit(): void {
  }



  fetchEmployee(){
    this.service.getdocumentbyid(this.empid).subscribe((data)=>{this.emp_docdetails=data;
    console.log(data);
    if(this.emp_docdetails == null){
     
     this.check1=true;
     this.check=false;
    }
    else{
     
     
      this.check1=false;
      this.check=true;
      this.router.navigate(['app-set-status']);
    }
  });
}
}