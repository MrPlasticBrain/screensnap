import { Component, OnInit } from '@angular/core';
import { FileHolder } from "angular2-image-upload";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  afterUploadMessage;
  responseState;
  state;
  show(){
    this.state = 'active';
  }
  hide(){
    this.state = 'inactive';
  }
  public onUploadFinished(file: FileHolder) {
    console.log(file.serverResponse);
  }

  public onRemoved(file: FileHolder) {
    // do some stuff with the removed file.
  }

  public onUploadStateChanged(state: boolean) {
    console.log(state);
  }

  menuConfig: any = {
    "animation": "collapse",
    "offset": {
      "top": 55
    },
    closeOnCLick: false
  };
  menuItemsArray: any[] = [
    { "title": "Electricity", "link": "#" },
    { "title": "Mobile Bill", "link": "#" },
    {
      "title": "Home and Kitchen", "link": "#",
      "subItems": [
        { "title": "Furniture", "link": "#" },
        { "title": "Cookware", "link": "#" },
      ]
    },
    {
      "title": "Car and Bike Accessories", "link": "#",
      "subItems": [
        { "title": "Tyres and Alloys", "link": "#" },
        { "title": "Comfort and Safety", "link": "#" },
      ]
    },
    {
      "title": "Interior Design", "link": "#",
      "subItems": [
        { "title": "Furniture", "link": "#" },
        { "title": "Matress and Flowers", "link": "#" },
      ]
    },
    {
      "title": "Televisions", "link": "#",
      "subItems": [
        { "title": "Samsung", "link": "#" },
        { "title": "LG", "link": "#" },
      ]
    },
    {
      "title": "Computer Accessories", "link": "#",
      "subItems": [
        { "title": "Keyboards", "link": "#" },
        { "title": "Monitors", "link": "#" },
      ]
    },
  ];

  constructor(

  ) { }
  public onMenuClose() {
    console.log("menu closed");
  }
  public onMenuOpen() {
    console.log("menu Opened");
  }
  public onItemSelect(item: any) {
    console.log(item);
  }
  public ngOnInit() {

  }
}
