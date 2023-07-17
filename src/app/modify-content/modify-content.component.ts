import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from '../services/message.service';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';



@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {

  newActor: any = {};
  @Output() addActorEvent = new EventEmitter<Content>();
  constructor(public dialog: MatDialog, private MessageService: MessageService){}

  openDialog(){
    const dialogRef = this.dialog.open(AddContentDialogComponent,{
      width: '60%'
    });
    dialogRef.afterClosed().subscribe(newActorFromDialog => {
      if(newActorFromDialog){
        if(newActorFromDialog.title && newActorFromDialog.description && newActorFromDialog.creator){
          this.newActor = newActorFromDialog;
          this.addNewActor();
        } else {
          this.MessageService.add('No content added. Required fields were empty');
        }
      }
    });
  }


  addNewActor(){
    this.addActorEvent.emit(this.newActor);
    this.newActor = {};
  }

}