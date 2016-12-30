import { Component, ElementRef, OnInit } from '@angular/core';

// allows use of external js library from TypeScript.
// BoidsCanvas is a var in the library file
declare var BoidsCanvas: any;

@Component({
  selector: '[boids-canvas-wrapper]',
  templateUrl: './boids-canvas-wrapper.component.html',
  styleUrls: ['./boids-canvas-wrapper.component.less']
})
export class BoidsCanvasWrapperComponent implements OnInit {

  constructor(elem: ElementRef) {
    let options = {
      background: '#37474f',
      density: 'high',
      speed: 'medium',
      interactive: true,
      mixedSizes: true,
      boidColours: ["#34495e", "#e74c3c", '#2ecc71', '#9b59b6', '#f1c40f', '#1abc9c']
    };
    let boidsCanvas = new BoidsCanvas(elem.nativeElement, options);
  }

  ngOnInit() {
  }

}
