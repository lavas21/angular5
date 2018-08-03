import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {

  sub :any;
  name:string;
  data:string;
  constructor(private route: ActivatedRoute,private router:Router) { }
  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
      if(this.name != undefined)
      this.data = "Message "+this.name;          
    });

}
}
