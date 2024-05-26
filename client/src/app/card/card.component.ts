import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Detail } from '../interfaces/detail';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() compound: Detail = {
    chemical_id: 0,
    chemical_name: '',
    chemical_image: '',
    chemical_description: '',
    chemical_image_attribution: '',
  };
  @Input() random: Detail ={
    chemical_id: 0,
    chemical_name: '',
    chemical_image: '',
    chemical_description: '',
    chemical_image_attribution: '',
  }

}
