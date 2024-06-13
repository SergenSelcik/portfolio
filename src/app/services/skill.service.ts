import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills = [
    { name: 'Angular', image: './assets/img/angular.png' },
    { name: 'TypeScript', image: './assets/img/typescript.png' },
    { name: 'JavaScript', image: './assets/img/javascript.png' },
    { name: 'HTML', image: './assets/img/html.png' },
    { name: 'CSS', image: './assets/img/css.png' },
    { name: 'Firebase', image: './assets/img/firebase.png' },
    { name: 'Git', image: './assets/img/git.png' },
    { name: 'Scrum', image: './assets/img/scrum.png' },
    { name: 'Rest-Api', image: './assets/img/rest_api.png' },
    { name: 'Material Design', image: './assets/img/material_design.png' },
  ];

  constructor() { }
}
