import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { mapTo, take } from 'rxjs/operators';

interface mockDataObject {
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private mockDataObject: mockDataObject = {
    id: Math.random()
  }; 
  
  // Emits a mock object every second
  getMockData(): Observable<mockDataObject> {
    return interval(1000).pipe(
      mapTo(this.mockDataObject),
      take(10)
    );
  }
}
