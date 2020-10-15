import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-Takepicture',
  templateUrl: './Takepicture.component.html',
  styleUrls: ['./Takepicture.component.scss']
})
export class TakepictureComponent implements OnInit {
  focus: any;
  focus1: any;
  test : Date = new Date();
  constructor(private router: Router) { }

  ngOnInit() {
  }
  getPath(){
    return this.router.url;
  }
}
