import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackgroundService, EmployeeDocumentDto } from '../background.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {
  
  

  empName="";
  
  status:boolean;
  employeedocumentdto:EmployeeDocumentDto[];
  emp:EmployeeDocumentDto=new EmployeeDocumentDto(0,0,"","","");
  constructor(private service:BackgroundService,private router:Router) { 
    this.status=false;
  }

 
    ngOnInit(): void{}
  
      submit(empName:string){
        console.log("Employee")
       this.service.getdocumentbyname(empName).subscribe(
         response=>  this.handleSuccessfulResponse(response),
        );
        }
        
        handleSuccessfulResponse(response)
        {
          console.log(response)
          this.status=true;
          this.employeedocumentdto=response;
         //console.log(this.getord)
        }
    
    }
