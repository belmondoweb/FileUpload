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
  @Input() doc:File|any;
  Id:any;
  Flname:string | any;
  Flpath:string |any;
  List:any=[];

  getFiles!: Observable<any[]>;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.loadList();
    // this.refreshList()
  }


  loadList(){
    this.service.getFileList().subscribe((data:any)=>{
      this.List=data;

      // this.Id=this.doc.Id;
      this.Flpath=this.service.fileUrl+this.Flname;
    });
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


    addNewFile(){
      var val = {Id:this.Id, Flname:this.Flname};

      this.service.addFile(val).subscribe(res=>{
        alert(res.toString());
      });
    }

 }

