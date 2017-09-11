import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public counter = 0;
  public text: string = 's c df sd f sdf sd';

  public go = function () {
    console.log('component', this);
  };

  public newCounter = function (count) {
      this.counter = count;
  };

  constructor() { }




  ngOnInit() {
  }

}
