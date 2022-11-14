import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  @Input()
  profileImage: string = '/assets/123.png';

  @Input()
  aboutText: string[] = [
    `I'm a software developer experience in freelance work and a good history of timely finished projects. With proven competency in developing web apps and mobile apps for a viriety of clients and purposes, I strive to bring concrete results to my clients and employers.`,
    `I belive that good client-developer communication and mutual understand of our goals is of upmost importance in creating valuable and working solutions to my clients.`,
    `Below you can view a list of my technical skills and technologies I've worked with, as well as some interesting projects in my resume.`,
  ];

  @Input()
  mySkills: string[] = [
    'Good grasp of OOP',
    'Good grasp of design patterns',
    'Android development',
    'Web development',
    'mvvm + clean architecture',
    'Kotlin',
    'Java',
    'HTML + CSS',
    'Angular + ngrx',
    'NodeJS + ExpressJS + NestJS',
    'JavaScript/TypeScript',
    'SQL databases',
    'NoSQL (MongoDB, Redis, Neo4J)',
    'REST APIs + SOAP APIs',
    'GraphQL',
  ]
  

  constructor() { }

}
