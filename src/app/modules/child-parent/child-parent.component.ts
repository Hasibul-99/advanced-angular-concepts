import { Component, OnInit, ViewChild } from '@angular/core';
import { DemoTwoComponent } from "../../component/demo-two/demo-two.component";

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.scss']
})
export class ChildParentComponent implements OnInit {
  @ViewChild(DemoTwoComponent, {static: false})
  private demoTwo: DemoTwoComponent;

  constructor() { }

  ngOnInit(): void {
  }
  
  callChild = () => {
    this.demoTwo.parentValue('hello world');
  }

}
