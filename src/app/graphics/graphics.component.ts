import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.sass']
})
export class GraphicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createSrcMap();
  }

  imgSrc: Array<Array<String>> = [];
  
  createSrcMap() {
    for (let index = 0; index < 3; index++) {
      let array: Array<String> = [];
      for (let no = 1; no<=4; no++){
        if(no+index*4 <= 11)
          array.push('assets/mywork/graphics/graphic_'+(no+index*4)+'.jpg');
      }
      this.imgSrc.push(array);
    }
  }
}
