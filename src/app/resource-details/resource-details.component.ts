import { Component, OnInit } from '@angular/core';
import { EditResourceRenderer } from './container/edit-resource-renderer';
import { ResourceDetailsService } from '../service/resource-details.service';

@Component({
  selector: 'app-admin',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent implements OnInit {
  frameworkComponents;
  resourceList:[];
  constructor(private resourceDetailsService:ResourceDetailsService ) { this.frameworkComponents = { editResourceRenderer: EditResourceRenderer } }
  ngOnInit() {
    this.resourceDetailsService.getResouceDetails().subscribe(result  => {
      this.resourceList = result;
      console.log(this.resourceList)
    },error => {
      console.log(error)
    });  
  }
  prdtColumnDefs = [
    { headerName: 'Id', field: 'productId', filter: 'agTextColumnFilter', width: 75 },
    { headerName: 'Product Name', field: 'productTitle', width: 150 },
    { headerName: 'Category', field: 'productMainCategory', width: 150 },
    { headerName: 'Sub-Category', field: 'productSubCategory', width: 150 },
    { headerName: 'Price', field: 'productPrice', width: 100 },
    { headerName: 'Discount', field: 'productDiscount', width: 150 },
    { headerName: 'Weight', field: 'productWeight', width: 150 },
    { headerName: 'Status', field: 'productStatus', width: 100 },
    { headerName: 'Edit', field: 'edit', width: 75, cellRenderer: "editResourceRenderer" }
  ];

  prdtRowData = [
    {
      productId: 'Toyota', productTitle: 'dsfa', productMainCategory: 35000, productSubCategory: 'dsfa', productPrice: 'dsfa',
      productDiscount: 'dsfa', productWeight: 'dsfa', productStatus: ''
    },
  ];

 

}
