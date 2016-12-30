import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  url: string;
}

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  skills: Skill[] = [
    { name: 'HTML5', url: 'assets/images/skills/html5.svg' },
    { name: 'CSS3', url: 'assets/images/skills/css3.svg' },
    { name: 'Less', url: 'assets/images/skills/less.svg' },
    { name: 'JavaScript', url: 'assets/images/skills/javascript.svg' },
    { name: 'AngularJS', url: 'assets/images/skills/angular.svg' },
    { name: 'jQuery', url: 'assets/images/skills/jquery.svg' },
    { name: 'Node.js', url: 'assets/images/skills/node.svg' },
    { name: 'MongoDB', url: 'assets/images/skills/mongodb.svg' },
    { name: 'PostgreSQL', url: 'assets/images/skills/postgresql.svg' },
    { name: 'AWS', url: 'assets/images/skills/aws.svg' },
    { name: 'Heroku', url: 'assets/images/skills/heroku.svg' },
    { name: 'Python', url: 'assets/images/skills/python.svg' },
    { name: 'Grunt', url: 'assets/images/skills/grunt.svg' },
    { name: 'Linux', url: 'assets/images/skills/linux.svg' },
    { name: 'Windows', url: 'assets/images/skills/windows.svg' },
    { name: 'Git', url: 'assets/images/skills/git.svg' },
    { name: 'GIMP', url: 'assets/images/skills/gimp.svg' },
    { name: 'Inkscape', url: 'assets/images/skills/inkscape.svg' }
  ];
}
