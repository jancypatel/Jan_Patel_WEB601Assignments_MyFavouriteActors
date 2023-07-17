import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {

  newActor: any = {};
  @Output() addActorEvent = new EventEmitter<Content>();

  addNewActor(){
    this.addActorEvent.emit(this.newActor);
    this.newActor = {};
  }

}