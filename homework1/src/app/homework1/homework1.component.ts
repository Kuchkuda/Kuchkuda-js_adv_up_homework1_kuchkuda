import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { UrlSerializer } from '@angular/router';

@Component({
  selector: 'app-homework1',
  templateUrl: './homework1.component.html',
  styleUrls: ['./homework1.component.scss'],
})
export class Homework1Component implements OnInit {
  public word: string = '';
  public wordsArr: any = [];
  public badWord: any = [];
  public textArea: any = '';
  constructor() {}

  ngOnInit(): void {}
  add() {
    if (!this.word) {
      alert('Введіть слово');
    } else {
      this.wordsArr.push(this.word);
      this.badWord = this.wordsArr.toString();
      this.word = '';
    }
  }
  reset() {
    this.word = '';
    this.badWord = '';
    this.wordsArr = [];
    this.textArea = '';
  }
  cenzor() {
    if (!this.textArea) {
      alert('Введіть слово в Text Area');
    } else {
      let textArea: string = this.textArea;
      const arrWord = textArea.split(' ');
      for (let i = 0; i < arrWord.length; i++) {
        for (let b = 0; b < this.wordsArr.length; b++) {
          if (arrWord[i] === this.wordsArr[b]) {
            let zero: string = '';
            for (let c = 0; c < this.wordsArr[b].length; c++) {
              zero = zero + '*';
            }
            arrWord[i] = zero;
            this.textArea = arrWord.join(' ');
          }
        }
      }
    }
  }
}
