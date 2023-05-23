import { Component } from '@angular/core';
import { Etheme } from '../../enums/Etheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public icon: string = Etheme.ICON_LUA;
  public theme: string = Etheme.TEXT_DARK;

  public toggle(){
    const theme = document.body.classList.toggle('dark-theme');

    if(theme){
      this.theme = Etheme.TEXT_LIGHT;
      return (this.icon = Etheme.ICON_SOL);
    }

    this.theme = Etheme.TEXT_DARK;
    return (this.icon = Etheme.ICON_LUA);
  }
}
