import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  private _interval;

  @Output() gameNumberIncrement = new EventEmitter<{ value: number }>();

  gameNumber: number = 0;

  constructor() { }

  onStartGame(): void {
    this._interval = setInterval(()=>{
      this.gameNumber += 1;
      this.gameNumberIncrement.emit({value: this.gameNumber});
    }, 1000);
  }

  onEndGame(): void {
    clearInterval(this._interval);
  }

  ngOnInit(): void {
  }

}
