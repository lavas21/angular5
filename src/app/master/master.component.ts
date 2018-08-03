import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit, OnChanges {
  show:boolean =true;
  constructor() { 
    console.log("constructor called");
  }

  ngOnInit() {
    console.log("init called");
  }
  ngOnChanges(change: SimpleChanges){
    console.log("on change called");
  }

  modify(){
    this.show = !this.show;
  }

}
