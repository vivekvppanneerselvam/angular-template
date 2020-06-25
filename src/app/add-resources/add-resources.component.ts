import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-resources',
  templateUrl: './add-resources.component.html',
  styleUrls: ['./add-resources.component.css']
})
export class AddResourcesComponent implements OnInit {
  @Input() data;
  @Input() type : String;
  constructor() { }

  ngOnInit(): void {
    console.log("afsdf",this.data);
    console.log("afsdf",this.type);
  }

}
