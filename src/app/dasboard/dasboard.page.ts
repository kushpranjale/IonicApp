import { ThemeService } from './../theme.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.page.html',
  styleUrls: ['./dasboard.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DasboardPage implements OnInit {

  status = false;
   iconName = 'sunny';
   toastMessage = '';

  constructor( private themeService: ThemeService, private toastController: ToastController) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: `you switched to ${this.toastMessage} mode`,
      duration: 1000,
      showCloseButton: true,
      animated: true
    });
    toast.present();
  }

  ngOnInit() {

  }
  onChange(event: any) {
    console.log(this.status + '' + event);
    if (this.status) {
      this.iconName = 'moon';
      this.themeService.addDarkTheme();
      this.toastMessage = 'dark';
      this.presentToast();
    } else {
      this.iconName = 'sunny';
      this.themeService.removeDarkTheme();
      this.toastMessage = 'light';
      this.presentToast();
    }
  }

}
