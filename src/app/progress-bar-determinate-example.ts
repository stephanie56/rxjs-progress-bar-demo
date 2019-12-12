import {Component} from '@angular/core';
import { MockDataService } from './mock-data.service';
import { scan, mapTo, tap, map } from 'rxjs/operators';


/**
 * @title Determinate progress-bar
 */
@Component({
  selector: 'progress-bar-determinate-example',
  templateUrl: 'progress-bar-determinate-example.html',
  styleUrls: ['progress-bar-determinate-example.css'],
})
export class ProgressBarDeterminateExample {

  constructor(private mockData: MockDataService) {}

  // We 'move' the progress bar by updating the `value` property
  private progress = 0;
  private totalRequests = 10; 

  // A simplicity progress bar example
  // ngOnInit() {
  //   this.mockData.getMockData().pipe(
  //     mapTo(10),
  //     scan((accu, curr) => accu + curr, 0),
  //     tap(progress => this.progress = progress)
  //   ).subscribe((item) => {
  //     console.log(item);
  //   })
  // }

  // Another example where you need to calculate progress percentage
  ngOnInit() {
    this.mockData.getMockData().pipe(
      scan((accu, curr) => accu + 1, 0),
      map(numberOfCompletedRequests => this.calculateProgressPercentage(numberOfCompletedRequests, this.totalRequests)),
      tap(progress => this.progress = progress)
    ).subscribe((item) => {
      console.log(item);
    })
  }

  // helper function to calculate percentage of progress
  private calculateProgressPercentage = (numbersOfCompletedRequests: number, numbersOfRequests: number) => {
    return numbersOfCompletedRequests / numbersOfRequests * 100;
  } 
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */