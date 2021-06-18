import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes: Heroe[] = [];
  textoABuscar: string = '';

  constructor( private heroesService: HeroesService, 
               private router: Router,
               private activatedRoute: ActivatedRoute ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.textoABuscar = params['texto'];
      this.heroes = this.heroesService.buscarHeroe( params['texto'] );
    });
  }

  verHeroe( id: number ) {
    this.router.navigate( ['/heroe', id] );
  }
}

