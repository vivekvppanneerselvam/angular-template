import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AddResourcesComponent } from '../../add-resources/add-resources.component';

@Component({
    selector: 'edit-resource-cell',
    template: '<span><i class="icon-sm" style = "height: 15px;width: 15px;" (click)="invokeParentMethod()">edit</i></span>',  
})
export class EditResourceRenderer implements ICellRendererAngularComp {

    public params: any;
    constructor(private modalService: NgbModal){}
    agInit(params: any): void {
        this.params = params;
        console.log(this.params.data)
    }
    public invokeParentMethod() {
        const modalRef = this.modalService.open(AddResourcesComponent);
        modalRef.componentInstance.data = this.params.data  
        modalRef.componentInstance.type = 'edit'
    }
    refresh(): boolean {
        return false;
    }
}