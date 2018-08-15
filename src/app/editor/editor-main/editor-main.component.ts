import { Component, OnInit } from '@angular/core';
import {EndecodeService} from '../endecode.service';

@Component({
  selector: 'app-editor-main',
  templateUrl: './editor-main.component.html',
  styleUrls: ['./editor-main.component.less']
})
export class EditorMainComponent implements OnInit {
  debug: string;
  constructor(public endecodeService: EndecodeService) { }

  ngOnInit() {
    this.endecodeService.getOperates(1);
    console.log(this.endecodeService.operate);
  }

}
