import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();
    
    this.contentList.add({
      id: 1,
      title: "Feroz Khan",
      description: "Khan was born on 11 July 1990, in Quetta, Balochistan in Pakistan into a Pashtun family.",
      creator: "Created his career in Pakistan Film Industry",
      imgUrl: "https://superstarsbio.com/wp-content/uploads/2019/05/feroze-khan.png",
      type: "Pakistani Actor"
    });

    this.contentList.add({
      id: 2,
      title: "Burak Deniz",
      description: "Burak Deniz (born 17 February 1991) is a Turkish actor and model who predominantly works in Turkish series and films.",
      creator: "Created his career in Turkish Film Industry",
      imgUrl: "https://flxt.tmsimg.com/assets/908486_v9_ba.jpg",
      type:  "Turkish Actor"
    });

    this.contentList.add({
      id: 3,
      title: "Baris Arduc",
      description: "Baris Arduc is a Turkish actor and model.",
      creator: "Created his career in Turkish Film Industry",
      imgUrl: "https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/762823794826.jpg",
      type: "Turkish Actor"
    });
  }
}