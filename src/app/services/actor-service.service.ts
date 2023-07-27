import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ActorServiceService {

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json"})
  }

  constructor(private http: HttpClient , private MessageService: MessageService) { }

  getActor(): Observable<Content[]>
  {
    this.MessageService.add("Content array loaded!");

    return this.http.get<Content[]>("/api/actor");
  }

  addActor(newActor: Content): Observable<Content>{
    this.MessageService.add(`New Actor added`);
    return this.http.post<Content>("/api/actor", newActor, this.httpOptions);
  }

  getActorById(id: number): Observable<any> {
    const actor = this.http.get<Content>(`api/actor/${id}`);

    if (actor) {
      this.MessageService.add(`Content Item at id: ${id}`);

      return actor;
    }
    this.MessageService.add("Invalid Id");

    return of("Invalid Id");
  }

}