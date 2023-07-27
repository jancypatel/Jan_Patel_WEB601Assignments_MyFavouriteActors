import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { ActorServiceService } from './services/actor-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'Jan_Patel_MyFavouriteActors';
 

  constructor(private ActorServiceService: ActorServiceService){}

  ngOnInit(){}
}
