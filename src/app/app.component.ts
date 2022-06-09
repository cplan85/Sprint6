import { Component } from '@angular/core';
import { HistoryItem } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public history: HistoryItem[] = [
    {
      txt: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
      img: 'url("../assets/1.jpg")',
    },
    {
      txt: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
      img: 'url("../assets/2.jpg")',
    },
    {
      txt: "L'heroi va decidir travessar la porta que el portava a casa",
      img: 'url("../assets/3.jpg")',
    },
    {
      txt: 'Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...',
      img: 'url("../assets/4.jpg")',
    },
  ];

  // use ng g c <appname> to create new app. Use optional -s -t flags to remove styling or template.
  title = 'Sprint 6 App';
}
