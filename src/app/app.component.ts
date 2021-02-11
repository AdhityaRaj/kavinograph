import { Component, OnInit, AfterViewChecked } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'kavinograph';

  ngOnInit(){
    AOS.init();
  }

  ngAfterViewChecked(){
    AOS.refresh();
  }
}
