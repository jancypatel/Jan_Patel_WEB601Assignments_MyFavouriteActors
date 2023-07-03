import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class ActorServiceService {

  constructor() { }

  getActor(): Observable<Content[]>
  {
    const actor = contents;
    return of(actor);
  }

  getActorById(id: number): Observable<any> {
    const actor = contents.find(content => content.id === id);

    if (actor) {
      return of(actor);
    }
    return of("Invalid Id");
  }

}