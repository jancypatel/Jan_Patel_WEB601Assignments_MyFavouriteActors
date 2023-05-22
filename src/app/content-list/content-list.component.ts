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
      type: 'Pakistani Actor', 
      tags: ['PakistaniActor', 'Pakistani'] 
    },
    { 
      id: 2, 
      title: 'Burak Deniz', 
      description: 'Burak Deniz (born 17 February 1991) is a Turkish actor and model who predominantly works in Turkish series and films.', 
      creator: 'Created his career in Turkish Film Industry.',
      image: 'https://flxt.tmsimg.com/assets/908486_v9_ba.jpg',
      type: 'Turkish Actor', 
      tags: ['TurkishActor', 'Turkish'] 
    },
    { 
      id: 3, 
      title: 'Baris Arduc', 
      description: 'Baris Arduc is a Turkish actor and model.', 
      creator: 'Created his career in Turkish Film Industry.',
      image: 'https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/762823794826.jpg',
      type: 'Turkish Actor', 
      tags: ['TurkishActor', 'Turkish'] 
    }
  ];

  logDetails(content: any) {
    console.log('ID:', content.id);
    console.log('Title:', content.title);
  }

}
