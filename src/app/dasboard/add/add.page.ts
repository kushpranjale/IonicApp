import { ThemeService } from './../../theme.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddPage implements OnInit {

  constructor( private themeservice: ThemeService) { }

  ngOnInit() {
  }
  darkMode() {
    this.themeservice.addDarkTheme();
  }

}
