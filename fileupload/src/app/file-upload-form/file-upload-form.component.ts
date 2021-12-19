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
  getFiles!: Observable<File[]>;
 fileName:string | any;
  filePath:string |any;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.refreshList();
  }
  uploadFile(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.uploadFile(formData).subscribe((data:any)=>{
      this.fileName=data.toString();
      this.filePath=this.service.fileUrl+this.fileName;
    })
  }

  addFile(){
    this.service.addFile(this.doc).subscribe(res=>{
      alert(res.toString());
    });
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteFile(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshList();
      })
    }
  }

  refreshList(){
    this.getFiles = this.service.getFileList()}



 }

