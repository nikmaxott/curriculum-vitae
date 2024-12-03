import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Fork of Gantt Chart Library',
      technologies: ['React', 'Vite', 'Github Actions', 'open source'],
      description:
        "A fork of MaTeMaTuK's Gantt Chart Library, with a focus on updating it for use in company projects and improving it's build process by \
        moving to Vite from microbundle, adding extended type support, and making improvements to the standard UI elements. \
        This project was a great learning experience in how to work with open source projects, and how to contribute to them.",
      link: {
        url: 'https://github.com/nikmaxott/gantt-task-react',
        text: 'Github Repository',
      },
    },
    {
      title: 'Django Blog and Library Project',
      technologies: ['Python', 'Bulma', 'Github Actions', 'Azure'],
      description:
        'Based on the MDN Django Tutorial this pair of apps is a foray into Python development, hosted on Azure Web Apps and deployed via both Github Actions and Gitlab Runners. Using Bulma UI for styling. Furthermore this process was outlined in a LinkedIn article.',
      link: {
        url: 'https://www.linkedin.com/pulse/building-library-site-blog-azure-django-nikolaus-maxim-zolnhofer',
        text: 'LinkedIn Article',
      },
      image: {
        src: 'https://www.nikmaxott.org/wp-content/uploads/2023/09/Screenshot-2023-09-18-at-14-25-39-Django-Blog.png',
        alt: 'Screenshot of a blog post in the Django Blog Project',
      },
    },
    {
      title: 'Superbase Shop - SaaS Shop Design',
      technologies: ['Gatsby', 'Bootstrap', 'Auth0'],
      description:
        'A project where I used Gatsby.JS to create a static site, hosted on-premises. The site showcases several key products of the Superbase brand. This project was a nice challenge and a change of pace from my normal work at the time, and showcases my stylistic choices, preferring a minimal look.',
      link: {
        url: 'https://shop.superbase.com/',
        text: 'shop.superbase.com',
      },
      image: {
        src: 'https://i0.wp.com/www.nikmaxott.org/wp-content/uploads/2022/07/image-2.png',
        alt: 'Screenshot of shop.superbase.com showcasing the Repair Portal product',
      },
    },
  ];
}

interface Project {
  title: string;
  technologies: string[];
  description: string;
  link?: {
    url: string;
    text: string;
  };
  image?: {
    src: string;
    alt: string;
  };
}
