import { Component, OnInit } from '@angular/core';
import { Trade, TradeService } from '../../services/trade'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';  
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-trade-table', // The component's custom HTML tag
  standalone: true, // This component doesn’t need to be part of a module
  imports: [CommonModule, FormsModule, 
    MatTableModule, MatSelectModule, 
    MatFormFieldModule, MatPaginatorModule, MatIconModule], // Modules this component depends on
  templateUrl: './trade-table.component.html', // HTML file for UI layout
  styleUrls: ['./trade-table.component.css'] // CSS file for styling
})
export class TradeTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'price', 'volume', 'timestamp', 'side']; // Columns to show in the table
  dataSource = new MatTableDataSource<Trade>(); // Holds the table data for Material table
  @ViewChild(MatPaginator) paginator!: MatPaginator; // Reference to the paginator in the template

  trades: Trade[] = []; // Raw trades data fetched from the service
  filtered: Trade[] = []; // Trades after applying filter and sorting
  filter: 'ALL' | 'BUY' | 'SELL' = 'ALL'; // Filter option selected by user
  sortField: 'price' | 'timestamp' = 'timestamp'; // Sorting field selected by user

  constructor(private tradeService: TradeService) {} // Inject TradeService to fetch trades

  ngOnInit(): void {
    this.load(); // Fetch initial data
    setInterval(() => this.load(), 5000); // Refresh data every 5 seconds
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; // Attach paginator to the table data source
  }

  load(): void {
    this.tradeService.getTrades().subscribe(data => {
      this.trades = data; // Save raw trades
      this.apply(); // Apply filter + sort and update UI
    });
  }

  apply(): void {
    this.filtered = this.trades
      .filter(t => this.filter === 'ALL' || t.side === this.filter) // Apply type filter (ALL, BUY, SELL)
      .sort((a, b) => { // Apply sorting based on selected field
        if (this.sortField === 'price') {
          return b.price - a.price;
        }
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      });

    this.dataSource.data = this.filtered; // Update table data
  }
}
