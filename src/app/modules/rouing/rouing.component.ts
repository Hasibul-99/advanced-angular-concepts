import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-rouing',
  templateUrl: './rouing.component.html',
  styleUrls: ['./rouing.component.scss']
})
export class RouingComponent implements OnInit {
  courseId
  propertyId
  
  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseId = +params["courseId"]; // (+) converts string 'id' to a number
      this.propertyId = +params["propertyId"]; // (+) converts string 'id' to a number
    });
  }

}
