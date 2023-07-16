import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ActorServiceService {

  constructor(private MessageService: MessageService) { }

  getActor(): Observable<Content[]>
  {
    const actor = contents;
    this.MessageService.add("Content array loaded!");

    return of(actor);
  }

  getActorById(id: number): Observable<any> {
    const actor = contents.find(content => content.id === id);

    if (actor) {
      this.MessageService.add(`Content Item at id: ${id}`);

      return of(actor);
    }
    this.MessageService.add("Invalid Id");

    return of("Invalid Id");
  }

}