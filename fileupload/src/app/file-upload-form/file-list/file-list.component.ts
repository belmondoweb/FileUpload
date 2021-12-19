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
 @Input() fileName$!:Observable<File[]>;
 @Output() count: any;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
this.fileName$=this.service.getFileList();
  }

}
