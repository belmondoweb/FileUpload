import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { File } from '../shared/file';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() count$:Observable<any[]> | undefined ;
count:any=[]
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.get();
    this.count$= this.service.getFileList();
  }
get(){
  this.service.getFileList().subscribe(data=>this.count=data)
}
}
