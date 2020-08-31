import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent implements OnInit {

  isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  click = () => {
    this.isActive = !this.isActive;
  }

}
