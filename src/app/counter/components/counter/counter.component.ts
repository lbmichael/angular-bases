import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter: {{counter}}</h3>
    
    <button class="btn m-1 btn-secondary" (click)="decreaseBy(5)">-1</button>
    <button class="btn m-1 btn-secondary" (click)="reset()">Reset</button>
    <button class="btn m-1 btn-secondary" (click)="increaseBy(5)">+1</button>
    `
})

export class CounterComponent {
    public counter: number = 10;
    
    increaseBy(value: number): void {
        this.counter += value;
      }
    
      decreaseBy(value: number): void {
        this.counter -= value;
      }
    
      reset(): void {
        this.counter = 10;
      }

}