import { Component, OnInit, OnDestroy, AfterContentInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnDestroy, AfterContentInit, OnChanges {
  ngAfterContentInit(): void {
    console.log("After Content Init called.");
  }
  @Input() name;
  constructor() { }

  ngOnInit() {
    console.log("Student init called");
    console.log("Student Name called "+this.name);
  }
  ngOnDestroy(){
    console.log("student removed");
  }

  ngOnChanges(change: SimpleChanges){
    console.log("student changes called ---"+JSON.stringify(change));
  }
}
