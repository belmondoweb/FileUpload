import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { File } from '../shared/file';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-file-upload-form',
  templateUrl: './file-upload-form.component.html',
  styleUrls: ['./file-upload-form.component.css']
})
export class FileUploadFormComponent implements OnInit {
  @Input() doc!: File;
  Id:string|any;
  Flname:string | any;
  Flpath:string |any;


  getFiles!: Observable<any[]>;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.refreshList();
  }
  uploadFile(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.uploadFile(formData).subscribe((data:any)=>{
      this.Flname=data.toString();
      this.Flpath=this.service.fileUrl+this.Flname;
    })
  }

  addFile(val:File){
    this.service.addFile(val).subscribe(res=>{
      alert(res.toString());
    });
  }



  refreshList(){
    this.getFiles = this.service.getFileList()}



 }

