import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { AddResourcesComponent } from './add-resources/add-resources.component';


import { AgGridModule } from 'ag-grid-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditResourceRenderer } from './resource-details/container/edit-resource-renderer'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

 

@NgModule({
  declarations: [
    AppComponent,
    ResourceDetailsComponent,
    AddResourcesComponent,
    EditResourceRenderer

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([ResourceDetailsComponent, EditResourceRenderer]),
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddResourcesComponent],
})
export class AppModule { }
