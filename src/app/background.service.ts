import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export class LoginDto
{
  empId:number;
  password:string;
  roleId:number;
  constructor(empId:number, password:string, roleId:number){
    this.empId = empId;
    this.password = password;
    this.roleId = roleId;
}
}
export class EmployeeDocumentDto
{
  empId:number;
  docId:number;
  docType:string;
  docData:string;
  empName:string;
  constructor(empId:number,docId:number,docType:string,docData:string,empName:string){
    this.empId = empId;
    this.docId = docId;
    this.docData=docData;
    this.docType = docType;
    this.empName=empName;
}
}
export class VerificationDto
{
  empid:number;
  status:string;
  verfId: number;
  constructor(empid:number,status:string)
  {
    this.empid=empid;
    this.status=status;
  }
}

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  constructor(private http:HttpClient) { }

  logindto:LoginDto;
  employeedocumentdto:EmployeeDocumentDto;
  verification:VerificationDto;
  public getlogindetails(empId:number,password:String){
    
    return this.http.get("http://localhost:4937/bgv/login/"+empId+"/"+password);//,{responseType: 'json'});
  

  }
  public getdocumentbyid(empId:number){
    
    return this.http.get("http://localhost:4937/bgv/getdocumentbyid/"+empId);//,{responseType: 'json'});
  
  }
  public getdocumentbyname(empName:string){
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    
    return this.http.get("http://localhost:4937/bgv/getdocumentbyname/"+empName,{headers,responseType: 'json'});
  
  }
  
  
  public setstatus(verf){
    console.log(verf);
    return this.http.post("http://localhost:4937/bgv/setstatus",verf,{responseType: 'text'});
  }



  

  

}

