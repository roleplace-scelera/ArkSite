import { Component} from '@angular/core';
import { DataClient } from './Services/DataClient';
import { Player } from './Classes/Players';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [DataClient],
    moduleId: module.id
})
export class AppComponent {
    name: string;
    results: Player[];  
    p: Player;

    constructor(public dataService: DataClient) {
        this.name = "ArkSite";
        this.results = this.getPlayers();    
    }

    /**
    * Populate players using Observable Subscription
    */
    getPlayers = (): Player[] => {
        let results = new Array<Player>();  

        /**
        * In order to proccess an observable collection, it MUST be subscribed too.
        * Observables are like Promises + Events 
        */
        this.dataService.getPlayers().subscribe((players: Player[]) => {
            players.forEach((player: Player) => {
                this.results.push(player)
            });
        });   
        return results;
    }
}

