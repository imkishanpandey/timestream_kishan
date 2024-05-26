import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { baseUrl } from '../../config';
import { CommonModule } from '@angular/common';
import { Detail } from '../interfaces/detail';

@Component({
  selector: 'app-detailpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detailpage.component.html',
  styleUrl: './detailpage.component.scss',
})
export class DetailpageComponent implements OnInit {
  id: string = '';
  obj: Detail = {
    chemical_id: 0,
    chemical_name: '',
    chemical_image: '',
    chemical_description: '',
    chemical_image_attribution: ''
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {}  //dependency injection for routing and http

  ngOnInit() {
    this.route.params.subscribe((params) => {   //routing to the detail page
      this.id = params['id'];
    });
    this.http
      .get(`${baseUrl}/getChemicalsById/${this.id}`)
      .subscribe((data) => {
        this.obj = data as Detail;
      });
  }

  deleteChemical() {
    this.http
      .delete(`${baseUrl}deleteChemicals/${this.id}`)
      .subscribe((data) => {
        window.location.href = '/';
      });
  }
  updateChemical() {
    this.obj.chemical_name=prompt('Enter the name of the chemical')||this.obj.chemical_name;
    this.obj.chemical_description=prompt('Enter the description of the chemical')||this.obj.chemical_description;

    this.http
      .put(`${baseUrl}updateChemicals/${this.id}`, this.obj)
      .subscribe((data) => {
        // window.location.href = '/';
      });
  }
}
