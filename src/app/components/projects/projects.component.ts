import { Component, OnInit } from '@angular/core';

interface Project {
  name: string;
  thumbUrl: string;
  graphicUrl: string;
  date: string;
  type: string;
  description: string;
  url: string;
  buttonText: string;
}

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  projects: Project[] = [
    {
      name: 'Tripmappr',
      thumbUrl: 'assets/images/projects/tripmappr.thumb.png',
      graphicUrl: 'assets/images/projects/tripmappr.graphic.png',
      date: 'Ongoing',
      type: 'web app',
      description: "I am currently developing Tripmappr, a web app which allows travellers to visualise their trip photos on a map. This application is being developed using Node.js, AngularJS and MongoDB.\n\nIf you're interested, be sure to check out the site and sign up to be the first to know when we launch!",
      url: 'http://www.tripmappr.com/',
      buttonText: 'visit site'
    },{
      name: 'Ocean Blue Software',
      thumbUrl: 'assets/images/projects/oceanblue.thumb.png',
      graphicUrl: 'assets/images/projects/oceanblue.graphic.png',
      date: 'Summer 2015',
      type: 'television ui',
      description: "I completed a three month internship with digital television company Ocean Blue Software. During my time at Ocean Blue I was tasked with the design and implementation of a brand new television user interface which exposed the functionality offered by the proprietary backend technology suite ‘DTVKit’.\n\nMy design had a Flat UI aesthetic in order to achieve a contemporary look and feel. The use of a single strong accent colour makes the UI easy to use from a distance.\n\nThe UI was built using QML and JavaScript.",
      url: 'https://www.youtube.com/watch?v=JZPlccjQYfI',
      buttonText: 'view demo'
    },{
      name: 'Environment Agency',
      thumbUrl: 'assets/images/projects/ea.thumb.jpg',
      graphicUrl: 'assets/images/projects/ea.graphic.png',
      date: '2014/15',
      type: 'website/mobile app',
      description: "I was the lead front-end developer on a team commissioned to build a responsive, cross-platform web and mobile app for the Environment Agency, which presented a variety of geographic data sets in an intuitive and engaging way.\n\nWe developed an innovative ‘slider’ feature to facilitate the comparison of the data sets, alongside real-time location search and favouriting.\n\nThe app was built using web development technologies (HTML5, Less, Javascript, jQuery) and packaged for mobile with Phonegap.",
      url: '',
      buttonText: ''
    },{
      name: 'LanguagePear',
      thumbUrl: 'assets/images/projects/languagepear.thumb.png',
      graphicUrl: 'assets/images/projects/languagepear.graphic.png',
      date: 'current',
      type: 'website/mobile app',
      description: "I have been contracted to develop LanguagePear, a cross-platform language practice app. Aimed at language students, the app provides a chat-based platform to practice speaking your chosen language in real-time, doing away with slow-to-respond pen pals or email buddies.\n\nThe front-end of the app is being developed with web development technologies (HTML5, Less, AngularJS) with a Node.js backend and PostgreSQL database.",
      url: 'http://www.languagepear.com/',
      buttonText: 'visit site'
    },{
      name: 'Mubaloo',
      thumbUrl: 'assets/images/projects/mubaloo.thumb.png',
      graphicUrl: 'assets/images/projects/mubaloo.graphic.png',
      date: '2014',
      type: 'mobile app',
      description: "I was a lead full stack developer in a team taking part in Mubaloo’s hackathon, in which the challenge was to build something cool… in just 24 hours!\n\nOur solution was ‘PocketShout’, a location-based message posting platform. Using a fine-grain location accuracy users can post about their experiences in a very specific area – this generates a real-time heat-map of your local region, letting you know what’s hot and what’s not.\n\nThis app was developed using web development technologies and a Python backend.",
      url: '',
      buttonText: ''
    },{
      name: 'IntruderCam',
      thumbUrl: 'assets/images/projects/intrudercam.thumb.png',
      graphicUrl: 'assets/images/projects/intrudercam.graphic.png',
      date: '2013/14',
      type: 'mobile app',
      description: "I developed and released a motion detection and capture app, IntruderCam, for the Windows Phone store, using C# and .NET.\n\nThe app can act as your own personal CCTV camera. Whether your pesky neighbour keeps backing into your car, or you suspect your little brother is stealing chocolate from your room, IntruderCam helps you catch them red-handed!\n\nThe app has performed very well, achieving an average 4.8 star rating and more than 8000 downloads.",
      url: 'https://www.microsoft.com/en-us/store/apps/intrudercam/9nblggh08kb7',
      buttonText: 'view in store'
    },{
      name: 'Hairbeaut',
      thumbUrl: 'assets/images/projects/hairbeaut.thumb.png',
      graphicUrl: 'assets/images/projects/hairbeaut.graphic.png',
      date: '2013',
      type: 'website',
      description: "I was commissioned to design the hair and beauty social networking site HairBeaut, using the Ning platform and custom style sheets.\n\nHairBeaut allows hairdressers and beauty therapists to share their passion in an active community of like people. The site offers an activity feed, profiles, forums, discussion pages, and more.",
      url: '',
      buttonText: ''
    },{
      name: 'Student Robotics',
      thumbUrl: 'assets/images/projects/sr.thumb.png',
      graphicUrl: 'assets/images/projects/sr.graphic.png',
      date: '2013',
      type: 'competition',
      description: "I was the software engineer in a team winning second place and the Committee award in the national Student Robotics competition.\n\nWe were tasked with designing and building a robot which would go head to head in a game of ‘Pirate Plunder’ against other teams. There are no remote controls allowed – these robots were <em>entirely</em> autonomous!\nCheck out the video of the very tense final below – where our team (orange) lose out only to an ingenious move by the opposing team!\n\nThe software for the robot was written in Python.",
      url: 'https://www.youtube.com/watch?v=-HELhGpIBKA&feature=youtu.be',
      buttonText: 'check out the video'
    }
  ];

  selectedProjectIndex: number = 0;

  selectProject(idx: number): void {
    this.selectedProjectIndex = idx;
  }

  getScrollOffset(): number {
    let startScrollingIdx: number = 2;  // only shift the items when selecting past this idx
    let itemWidth: number = 200;

    if(this.selectedProjectIndex > startScrollingIdx && this.selectedProjectIndex < this.projects.length - startScrollingIdx - 1) {
      // in the middle section of the items
      return (this.selectedProjectIndex - startScrollingIdx ) * -itemWidth;
    } else if(this.selectedProjectIndex >= this.projects.length - startScrollingIdx - 1) {
      // in the latter section of the items: dont scroll any further
      return ((this.projects.length - startScrollingIdx - 1) - startScrollingIdx) * -itemWidth;
    } else {
      // in the former section of the items: dont scroll at all
      return 0;
    }
  }

  hasButton(project): boolean {
    if(project.url == '' || typeof project.url == 'undefined' ||
    project.buttonText == '' || typeof project.buttonText == 'undefined') {
      return true;
    }
    return false;
  }
}
