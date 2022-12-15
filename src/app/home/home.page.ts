import { Component, ViewChild } from '@angular/core';
import { IonContent, ToastController } from '@ionic/angular';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent) content!: IonContent;

  messages$: any;
  newMsg = '';

  constructor(private dataService:DataService, public toastCtrl: ToastController) {
    
   }

  async sendMessage() {
    const toast = this.toastCtrl.create({
      message: "Message sent",
      duration: 10000,
      position: 'bottom',
      color: 'danger',
      icon: 'sad'
    });
    (await toast).present();
    setTimeout(async () => {
      (await toast).dismiss();
    }, 1000);
    this.dataService.addChatMessage("text-davinci-003",this.newMsg,4000,1.0).subscribe(async (response:any) =>{
      this.newMsg = '';
      this.content.scrollToBottom();
      if (response){
        // console.log(response.choices[0].text);
        this.messages$ = response.choices[0].text;
      }else{
        console.log("Failed to get answer");
      }
    })
  }

  signOut() {

  }
}
