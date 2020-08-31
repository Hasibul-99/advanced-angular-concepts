import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent implements OnInit {

  isImportant: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  myStyles = {
    'background-color': 'lime',
    'font-size': '20px',
    'font-weight': 'bold'
  }

  setMyStyles() {
    let styles = {
      'background-color': this.isImportant ? 'red' : 'transparent',
      'font-weight': this.isImportant ? 'bold' : 'normal'
    };
    return styles;
  }

  click = () => {
    this.isImportant = !this.isImportant;
  }

}
