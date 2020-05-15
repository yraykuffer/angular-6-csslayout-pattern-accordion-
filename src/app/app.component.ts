import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  isShow = true;

  panels = {
    panel1: true, // initialize panel1 to expanded
    panel2: true, // initialize panel2 to expanded
    panel3: true // initialize panel3 to expanded
  }

  constructor() {
    this.displayOpenPanels(); 
  }

  togglePanel(panelName: string) {
    // it toggles the value from true to false, or from false to true
    this.panels[panelName] = !this.panels[panelName]; // use to toggle the clicked panel
    // equavalent to if (isOpened === panel*) {}
    if (this.panels[panelName]) {
       console.log(panelName + " is expanded");
    } else {
       console.log(panelName + " is collapsed");
    }

  }

  onLinkClick(event: any) { 
    event.stopPropagation(); // to avoid firing the parent event 
    alert("Link is clicked");
  }
  // logs the opened and collapsed panels
  displayOpenPanels() {
   if (this.panels.panel1) {
     console.log('panel1 is expanded');
   } else {
     console.log('panel1 is collapsed');
   }

   if (this.panels.panel2) {
     console.log('panel2 is expanded');
   } else {
     console.log('panel2 is collapsed');
   }

   if (this.panels.panel3) {
     console.log('panel3 is expanded');
   } else {
     console.log('panel3 is collapsed');
   }
    
  }
}
