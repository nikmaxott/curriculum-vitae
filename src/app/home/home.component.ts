import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from '../timeline/timeline.component';
import { ProjectsComponent } from '../projects/projects.component';
import { CertificateComponent } from '../certificate/certificate.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    CommonModule,
    TimelineComponent,
    ProjectsComponent,
    CertificateComponent,
  ],
})
export class HomeComponent {}
