import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stopwatch';

  public isStarted = false;
  public isPaused = false;
  public time = 0;

  
  public times: Array<number> = [];

  private idInterval: number|null = null;

  public start(): void {
    this.isStarted = true;
    this.isPaused = false;
    this.starTimer();
  }

  public stop(): void {
    this.isStarted = false;
    this.stopTimer();
    this.time = 0;
    this.times = [];
  }

  public keep(): void{
  this.times.push(this.time);  
  }

  public pause(): void {
    this.isPaused = true;
    this.stopTimer();
    this.keep();
  }

  public continue(): void {
    this.isPaused = false;
    this.starTimer();
  }
  public remove(index: number): void{
    if(index >= 0 && index < this.times.length) {
      this.times.splice(index, 1);
    }
  }

  private starTimer(): void {
    // Call stopTimer to force clear of existing interval before creating a new one.
    this.stopTimer();
    this.idInterval = setInterval(() => {
      this.time++;
    }, 1);
  }

  private stopTimer(): void {
    if (this.idInterval !== null) {
      clearInterval(this.idInterval);
    }
  }
}