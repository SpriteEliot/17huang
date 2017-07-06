import {
  Component,Input
} from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',//组件标签
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}