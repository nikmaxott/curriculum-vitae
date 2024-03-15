import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
})
export class TimelineComponent {
  timelineData = [
    {
      title: 'Fullstack Software Engineer',
      date: 'January 2024 - Present',
      description: [
        "Spearheading the development and optimization of AISUS's Gemini Platform, enhancing its functionality and performance.",
        'Leading the integration efforts of Machine Learning and Computer Vision technologies into daily operations.',
        'Collaborating closely with cross-functional teams to ideate and implement innovative solutions, resulting in streamlined processes and increased productivity.',
        'Actively contributing to the technological roadmap, identifying opportunities for enhancements and future-proofing the software infrastructure'
      ]
    },
    {
      title: 'Software Developer at AEON Geoscience Systems',
      date: 'September 2022 - August 2023',
      description: [
        'Extensively worked with React and Ruby on Rails to upgrade and extend the existing PROEX web application. Including developing new components, implementing bug fixes, and improving application performance.',
        'Utilised D3.js package to create multiple graphs, well log tracks, and data dashboards to enable the visualization and comparison of complicated datasets as part of a £70k+ client project prior to my redundancy.',
        'Revamped the visual design of the application with Figma as a rapid prototyping tool, working within a company-standard design template.',
        'Implemented a completely new self-sign up process including email confirmation using SendGrid',
        'Established complete build, linting, and testing pipelines as well as docker containerization of the application.',
      ],
    },
    {
      title: 'IT & Business Support at DK AVS',
      date: 'June 2018 - September 2022',
      description: [
        'Worked extensively in React, HTML, CSS, ES2023 JavaScript, and Redux, to enhance company web systems, including improved user interfaces and increased website speed.',
        'Optimised job-request process, resulting in 1,200+ TV repair requests being recorded, verified, and pre-arranged through an automated portal, leading to a 25% increase in customer communication efficiency and a reduction of manual labour.',
        "Oversaw comprehensive overhaul and implementation of the company's Enterprise Resource Planning system, including crafting comprehensive written proposals for key clients, providing on-call support during the transition period, and establishing new procedures and processes, culminating in the successful completion of the project.",
        'Assumed the role of Senior Developer, providing external clients with consulting services to set up new ERP & CRM Systems in Superbase NG, migrating from Superbase Classic.',
        'Spearheaded online marketing campaign resulting in 4,000 new users on the DK AVS website, resulting in a 20% increase in first-time customer service requests.',
      ],
    },
  ];
}
