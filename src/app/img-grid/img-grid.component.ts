import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-grid',
  templateUrl: './img-grid.component.html',
  styleUrls: ['./img-grid.component.sass']
})
export class ImgGridComponent implements OnInit {

  @Input()
    printObject : Array<Array<String>>;

  constructor() { }

  ngOnInit(): void {  }
}
