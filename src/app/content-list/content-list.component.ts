import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ActorServiceService } from '../services/actor-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contents: Content[] = [];
  searchTitle: string = "";
  titleFound: boolean | null = null;
  defaultActor: string = '/assets/images/Actor.jpeg';

  
  constructor(private ActorServiceService: ActorServiceService){
  }

  ngOnInit() {
    this.ActorServiceService.getActor().subscribe(actor => this.contents = actor );

  }

  addNewActor(newActor: Content){
    this.ActorServiceService.addActor(newActor).subscribe(newActorFromServer => {
      this.contents.push(newActorFromServer);
      this.contents = [...this.contents];
    });
  }
  
  searchByTitle() {
    const matchingActor = this.contents.find(actor => actor.title.toLowerCase() === this.searchTitle.toLowerCase());
    const cardElements = document.querySelectorAll(`.card`);
    if(matchingActor){
      this.titleFound = true;
      cardElements.forEach(card => {
        if(parseInt(card.id) === matchingActor.id){
          card.classList.add('matched');
        } else {
          card.classList.remove('matched');
        }
      });
    } else {
      this.titleFound = false;
      cardElements.forEach(card => card.classList.remove('matched'));
    }
  }
  
}