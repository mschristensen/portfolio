import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { StraplineComponent } from './components/strapline/strapline.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReviewSpinnerComponent } from './components/review-spinner/review-spinner.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { BoidsCanvasWrapperComponent } from './components/boids-canvas-wrapper/boids-canvas-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    StraplineComponent,
    HowItWorksComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    ReviewSpinnerComponent,
    ReviewsComponent,
    BoidsCanvasWrapperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    Ng2PageScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
