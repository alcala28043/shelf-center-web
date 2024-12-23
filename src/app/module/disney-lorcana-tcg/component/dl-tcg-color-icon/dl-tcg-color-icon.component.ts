import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dl-tcg-color-icon',
  imports: [UpperCasePipe],
  templateUrl: './dl-tcg-color-icon.component.html',
  styleUrl: './dl-tcg-color-icon.component.scss'
})
export class DLTCGColorIconComponent {

  @Input() name!: string;


}
