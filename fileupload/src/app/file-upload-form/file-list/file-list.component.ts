import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { File } from 'src/app/shared/file';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
 @Input() fileName$!:Observable<any[]>;
 ActivateEditComp:boolean=false;
 ModalTitle:string | undefined;
doc:any;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.fileName$=this.service.getFileList();
    console.log("check file name"+this.fileName$);
  }
  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteFile(item).subscribe(data=>{
        alert(data.toString());
        this.refreshList();
      })
    }
  }
  addClick(){
    this.doc={Id:0, Flname:"anonymous.png" }
    this.ModalTitle="Add Employee";
    this.ActivateEditComp=true;

  }

  editClick(item:any){
    console.log(item);
    this.doc=item;
    this.ModalTitle="Edit List";
    this.ActivateEditComp=true;
  }
  closeClick(){
    this.ActivateEditComp=false;
    this.refreshList();
  }

  refreshList(){
    this.fileName$ = this.service.getFileList()}

}
