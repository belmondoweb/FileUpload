import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadFormComponent } from './file-upload-form/file-upload-form.component';
import { FileListComponent } from './file-upload-form/file-list/file-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadFormComponent,
    FileListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
