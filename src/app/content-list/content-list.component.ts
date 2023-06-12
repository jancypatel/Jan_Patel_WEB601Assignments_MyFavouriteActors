import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  contents: any[] = [
    { 
      id: 1, 
      title: 'Feroz Khan', 
      description: 'Khan was born on 11 July 1990, in Quetta, Balochistan in Pakistan into a Pashtun family.', 
      creator: 'Created his career in Pakistan Film Industry.',
      image: 'https://superstarsbio.com/wp-content/uploads/2019/05/feroze-khan.png',
      type: 'Pakistani', 
      tags: ['PakistaniActor', 'Pakistani'] 
    },
    { 
      id: 2, 
      title: 'Burak Deniz', 
      description: 'Burak Deniz (born 17 February 1991) is a Turkish actor and model who predominantly works in Turkish series and films.', 
      creator: 'Created his career in Turkish Film Industry.',
      image: 'https://flxt.tmsimg.com/assets/908486_v9_ba.jpg',
      type: 'Turkish', 
      tags: ['TurkishActor', 'Turkish'] 
    },
    { 
      id: 3, 
      title: 'Baris Arduc', 
      description: 'Baris Arduc is a Turkish actor and model.', 
      creator: 'Created his career in Turkish Film Industry.',
      image: 'https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/762823794826.jpg', 
      type: 'Turkish',
      tags: ['TurkishActor', 'Turkish'] 
    },
    { 
      id: 4, 
      title: 'Wahaj Ali', 
      description: 'Wahaj Ali is a Pakistan actor and model.', 
      creator: 'Created his career in Pakistan Film Industry.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZLYy5EIhsft6khv51Vhj7D0Hi-EL5MfWAek5llBUYrJJC9_C',
      type: 'Pakistani',  
      tags: ['PakistanActor', 'Pakistani'] 
    },
    { 
      id: 5, 
      title: 'Robert Downey Jr', 
      description: 'Robert Downey Jr is a American actor and Producer.', 
      creator: 'His career has been characterized by critical and popular success in his youth,.',
      image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQijI6Sf7U-nKAfhHFmFBhVVVIxOfzI3QBeHqEjXJ7qcqbu98eqykx0UdmHrvt9Wx5hKilfZROD0mR85gk',
      tags: ['AmericanActor', 'America'] 
    },
    { 
      id: 6, 
      title: 'Keanu Reeves', 
      description: 'Keanu Reeves is a Canadian actor.', 
      creator: 'Created his career in Canadian Television Industry.',
      image: '', 
      tags: ['CanadianActor', 'Canadian'] 
    },
    { 
      id: 7, 
      title: 'Ram Charan', 
      description: 'Ram Charan is a Indian actor and Producer.', 
      creator: 'Ram Charan started his acting career in Telugu cinema.',
      image: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/3/2023_3$largeimg_400151399.JPG', 
      tags: ['IndianActor', 'India'] 
    }
  ];

  searchTitle: string = '';
  searchMessage: string = '';
  titleExists: boolean = false;

  searchContent() {
    const exists = this.contents.some(
      (content) => content.title.toLowerCase() === this.searchTitle.toLowerCase()
    );

    this.titleExists = exists;
    this.searchMessage = exists
      ? `Content with title '${this.searchTitle}' exists.`
      : `Content with title '${this.searchTitle}' does not exist.`;
  }
}