import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackgroundService } from '../background.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {

  empname:string;
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



  fetchEmployeedocument(){
    this.service.getdocumentbyname(this.empname).subscribe((data)=>this.emp_docdetails=data);
    if(this.emp_docdetails == null){
      this.check1 = true;
      this.check = false;
    }
    else{
      this.check1 = false;
      this.check = true;
    }
  }
}