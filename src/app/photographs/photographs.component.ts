import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photographs',
  templateUrl: './photographs.component.html',
  styleUrls: ['./photographs.component.sass']
})
export class PhotographsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createSrcMap();
  }

  imgSrc: Array<Array<String>> = [];
  
  createSrcMap() {
    for (let index = 0; index < 3; index++) {
      let array: Array<String> = [];
      for (let no = 1; no<=10; no++){
        array.push('assets/mywork/photos/photo_'+(no+index*10)+'.jpg');
      }
      this.imgSrc.push(array);
    }
  }
}
