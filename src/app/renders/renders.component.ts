import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renders',
  templateUrl: './renders.component.html',
  styleUrls: ['./renders.component.sass']
})
export class RendersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createSrcMap();
  }

  imgSrc: Array<Array<String>> = [];
  
  createSrcMap() {
    for (let index = 0; index < 3; index++) {
      let array: Array<String> = [];
      for (let no = 1; no<10; no++){
        array.push('assets/mywork/3d/3d_'+(no+index*10)+'.jpg');
      }
      this.imgSrc.push(array);
    }
  }
}
