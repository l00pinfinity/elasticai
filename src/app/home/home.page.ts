import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent) content!: IonContent;

  messages!: Observable<any[]>;
  newMsg = '';

  constructor(private dataService:DataService, private router: Router) {
    
   }

  sendMessage() {
    this.dataService.addChatMessage("text-davinci-003",this.newMsg,4000,1.0).subscribe((response:any) =>{
      if (response){
        console.log(response.choices);
        this.newMsg = '';
        this.content.scrollToBottom();
        this.messages = response.choices[0].text
      }else{
        console.log("Failed to get answer");
      }
    })
  }

  signOut() {

  }
}
