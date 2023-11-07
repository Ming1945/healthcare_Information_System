import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  close = false;

  constructor() {

  }

  ngOnInit() {

  }

  showLogin() {
    this.close = !this.close;
  }

}
