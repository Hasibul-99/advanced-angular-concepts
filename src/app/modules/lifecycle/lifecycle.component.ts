import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {
  
  value : number = 5;

  constructor() { 
  }

  ngOnInit() {
  }

  changeValue = () => {
    this.value = Math.random();
  }


}
