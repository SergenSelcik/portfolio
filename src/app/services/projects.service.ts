import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects = [
    {
      name: 'Join',
      image: './assets/img/join.png',
      technologies: 'HTML | CSS | JavaScript',
      description: 'projects.Join.description',
      github: 'https://github.com/SergenSelcik/join',
      link: 'https://join.sergen-selcik.com'
    },
    {
      name: 'Magic Run: Orc Invasion',
      image: './assets/img/magic_run_orc_invasion.png',
      technologies: 'JavaScript | CSS | HTML',
      description: 'projects.Magic Run: Orc Invasion.description',
      github: 'https://github.com/SergenSelcik/magic-run-orc-invasion',
      link: 'https://magic-run-orc-invasion.sergen-selcik.com',
      swapcontent: true
    },
    {
      name: 'Pokédex',
      image: './assets/img/pokedex.png',
      technologies: 'JavaScript | HTML | CSS | Api',
      description: 'projects.Pokédex.description',
      github: 'https://github.com/SergenSelcik/pokedex',
      link: 'https://pokedex.sergen-selcik.com'
    }
  ];

  constructor() { }
}
