import {Component, OnInit} from '@angular/core';
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
  }
}
