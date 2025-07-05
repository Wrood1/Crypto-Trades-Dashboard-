import { Injectable } from '@angular/core'; // Lets us use this service anywhere in the app
import { HttpClient } from '@angular/common/http'; // Used to send HTTP requests to the backend
import { Observable } from 'rxjs'; // Handles data that comes later (like from an API)


// This defines the structure of a trade object
export interface Trade { 
  id: string;               // Unique ID for the trade
  price: number;            // Price the trade happened at
  volume: number;           // How much was traded
  timestamp: string;        // When the trade happened
  side: 'BUY' | 'SELL';     // Was it a buy or sell
}

@Injectable({ providedIn: 'root' }) // Makes the service available across the whole app
export class TradeService {
  constructor(private http: HttpClient) {} // Injects HttpClient so we can use it to make API calls

  getTrades(): Observable<Trade[]> { // Function to get trades from the backend
    return this.http.get<Trade[]>('http://localhost:3000/api/trades'); // Sends a GET request and returns the data
  }
}
