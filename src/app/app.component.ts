import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public history: string[] = [
    "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
    "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
    "L'heroi va decidir travessar la porta que el portava a casa",
    "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."
  ]
  

  // use ng g c <appname> to create new app. Use optional -s -t flags to remove styling or template. 
  title = 'Sprint 6 App';
}

interface HistoryItem {
  text: string;
}
