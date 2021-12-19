import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  readonly APIUrl="https://localhost:44343/api";
  readonly fileUrl = "https://localhost:44343/uploads/";

  constructor(private http:HttpClient) { }

getFileList():Observable<File[]>{
  return this.http.get<any[]>(this.APIUrl+ '/PostFile')
  console.log("file")
}

  uploadFile(val:any){
    return this.http.post(this.APIUrl+'/PostFile/SaveFile',val);
  }
  addFile(file:any):Observable<any>{
    return this.http.post<any>(this.fileUrl, file)

  }

  deleteFile(val:any){
    return this.http.delete(this.APIUrl+'/PostFile'+ val)
  }
}


