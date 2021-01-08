import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sketches',
  templateUrl: './sketches.component.html',
  styleUrls: ['./sketches.component.sass']
})
export class SketchesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createSrcMap();
  }

  imgSrc: Array<Array<String>> = [];
  
  createSrcMap() {
    for (let index = 0; index < 3; index++) {
      let array: Array<String> = [];
      for (let no = 1; no<8; no++){
        array.push('assets/mywork/sketches/sketch_'+(no+index*8)+'.jpg');
      }
      this.imgSrc.push(array);
    }
  }

}
