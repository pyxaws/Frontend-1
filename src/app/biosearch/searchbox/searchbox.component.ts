import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.less']
})
export class SearchboxComponent implements OnInit {

  shake = false;
  constructor() {
  }

  ngOnInit() {
  }
  startShake() {
    this.shake = true;
  }
  stopShake() {
    this.shake = false;
  }
}
