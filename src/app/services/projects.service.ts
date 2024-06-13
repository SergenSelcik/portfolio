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
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      github: 'https://github.com/SergenSelcik/join',
    },
    {
      name: 'Magic Run: Orc Invasion',
      image: './assets/img/magic_run_orc_invasion.png',
      technologies: 'JavaScript | CSS | HTML',
      description: 'A simple Jump-and-Run game based on object-oriented approach. Help Melandis the lighting wizard to find gems and mana-potions for his fight against the cruel warlord Kragg.',
      github: 'https://github.com/SergenSelcik/magic-run-orc-invasion',
      swapcontent: true
    },
    {
      name: 'Pokédex',
      image: './assets/img/pokedex.png',
      technologies: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      github: 'https://github.com/SergenSelcik/pokedex',
    }
  ];

  constructor() { }
}
