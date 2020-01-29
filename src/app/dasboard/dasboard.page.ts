import { ThemeService } from './../theme.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.page.html',
  styleUrls: ['./dasboard.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DasboardPage implements OnInit {

  status = false;
   iconName = 'sunny';

  constructor( private themeService: ThemeService) { }

  ngOnInit() {

  }
  onChange(event: any) {
    console.log(this.status + '' + event);
    if (this.status) {
      this.iconName = 'moon';
      this.themeService.addDarkTheme();
    } else {
      this.iconName = 'sunny';
      this.themeService.removeDarkTheme();
    }
  }

}
