import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificate',
  imports: [CommonModule],
  templateUrl: './certificate.component.html',
})
export class CertificateComponent {
  certifacteData = [
    {
      name: 'Software Architecture & Design of Modern Large Scale Systems',
      by: 'udemy',
      date: 'October 2024',
      description:
        "This course design highly scalable, highly available and performant software systems, Define the system's technical requirements, high level components and API",
      url: 'https://www.ude.my/UC-3d55e67e-bc9c-4dd2-9e4b-7201eb576c1a/',
      skills: [
        'Software Architecture',
        'Microservices',
        'REST APIs',
        'Database Design',
        'Project Planning',
      ],
    },
    {
      name: 'Essential Supervisory Skills',
      date: 'May 2024',
      by: ' Aberdeen & Grampian Chamber of Commerce',
      description:
        'This course is designed to provide new and existing supervisors with the skills and knowledge to effectively manage their teams. The course covers a range of topics including communication, motivation, delegation, and performance management.',
      skills: [
        'Project Planning',
        'Team Management',
        'Communication',
        'Performance Management',
      ],
    },
    {
      name: 'Foundational C#',
      date: 'January 2024',
      by: ' FreeCodeCamp & Microsoft',
      description: '',
      skills: [
        'C#',
        'Object-Oriented Programming',
        'Unit Testing',
        'Debugging',
        'Back-End Development',
        'Azure',
      ],
      url: 'https://www.freecodecamp.org/certification/nikmaxott/foundational-c-sharp-with-microsoft',
    },
    {
      name: 'Build distributed apps with .NET Aspire',
      date: 'November 2024',
      by: 'Microsoft',
      description: '',
      skills: ['Azure', 'Containers', '.NET', 'Microservices'],
      url: 'https://learn.microsoft.com/en-gb/users/NikolausMaximZolnhofer-3144/credentials/A4B2B07780997E6F',
    },
    {
      name: 'Configure secure access to your workloads using Azure networking',
      date: 'July 2024',
      by: ' Microsoft',
      description: '',
      skills: ['Azure', 'Networking', 'Security', 'DevOps'],
      url: 'https://learn.microsoft.com/en-gb/users/nikolausmaximzolnhofer-3144/credentials/24d468a9d9855eb5',
    },
    {
      name: 'Deply cloud-native apps using Azure Container Apps',
      date: 'May 2024',
      by: ' Microsoft',
      description: '',
      skills: ['Azure', 'Containers', 'DevOps', 'Kubernetes'],
      url: 'https://learn.microsoft.com/en-us/users/NikolausMaximZolnhofer-3144/credentials/626256ba279a07ce',
    },
    {
      name: 'Secure Storage for Azure Files and Azure Blob Storage',
      date: 'March 2024',
      by: ' Microsoft',
      description: '',
      skills: ['Azure', 'Security', 'DevOps'],
      url: 'https://learn.microsoft.com/en-us/users/NikolausMaximZolnhofer-3144/credentials/E897BB5586F20769',
    },
    {
      name: 'Develop an ASP.NET Core web app that consumes an API',
      date: 'December 2023',
      by: ' Microsoft',
      description: '',
      skills: [
        'ASP.NET Core',
        'Entity Framework',
        'Azure',
        'HTML5',
        'TypeScript',
      ],
      url: 'https://learn.microsoft.com/en-gb/users/NikolausMaximZolnhofer-3144/credentials/624F553FCB5837A7',
    },
    {
      name: 'Introduction to User Experience Design',
      date: 'January 2022',
      by: ' Coursera',
      description: '',
      skills: ['UX Design', 'User Research', 'Prototyping'],
      url: 'https://www.coursera.org/account/accomplishments/certificate/3LGLJAYRJMES',
    },
  ];
}
