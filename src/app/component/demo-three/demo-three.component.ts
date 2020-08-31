import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck,
   AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo-three',
  templateUrl: './demo-three.component.html',
  styleUrls: ['./demo-three.component.scss']
})
export class DemoThreeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  @Input() value

  constructor() {
    console.log("conster fire");    
   }


  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges fire");
    console.log("changes", changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit fire", this.value);
  }

  ngDoCheck() {
    console.log("ngDoCheck fire");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit fire");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked fire"); 
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit fire");
  }

  ngAfterViewChecked() {
    console.log("AfterViewChecked fire");
  }

  ngOnDestroy() { 
    setTimeout(() => {
      console.log("OnDestroy fire");
    }, 5000)
  }


}
