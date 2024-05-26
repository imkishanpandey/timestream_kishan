import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { baseUrl, rowPerPage } from '../../config';
import { Detail } from '../interfaces/detail';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  rows: Detail[] = []; 
  rowPerPage: number = rowPerPage;
  currentPage: number = 0;
  totalPages: number = 0; 
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Detail[]>(`${baseUrl}/getChemicals`)
      .subscribe((data) => { 
        this.rows = data;
        this.totalPages = Math.ceil(this.rows.length / this.rowPerPage) - 1;  //pagination
      });
  }

 
}
