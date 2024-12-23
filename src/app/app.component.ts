import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './component/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    MatSidenavModule,
    SidenavComponent
  ]
})
export class AppComponent {
  title = 'Shelf Center';

  public switchLight() {
    let lightElement = document.getElementsByTagName("html")[0];
    let currentLight = lightElement.style.getPropertyValue("color-scheme"); 
    lightElement.style.setProperty("color-scheme", currentLight === "light" ? "dark" : "light");
    let classToChange = "";
    let classChanged = "";
    let parent = lightElement.classList.forEach(className => {
      if (className.startsWith("theme")) {
        classToChange = className;
        if (currentLight === "light") {
          classChanged = className.replace("light","dark");
        } else {
          classChanged = className.replace("dark","light");
        }
      }
    });
    console.log("current Theme",classToChange);
    console.log("change to theme", classChanged);
    lightElement.classList.remove(classToChange);
    lightElement.classList.add(classChanged);
  }
}
