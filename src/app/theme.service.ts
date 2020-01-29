import { Injectable, RendererFactory2, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
 render: Renderer2;
  constructor( private renderFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) {
    this.render = renderFactory.createRenderer(null , null);
  }

  addDarkTheme() {
   this.render.addClass(this.document.body, 'dark-theme');
  }

  removeDarkTheme() {
    this.render.removeClass(this.document.body, 'dark-theme');
  }
}
