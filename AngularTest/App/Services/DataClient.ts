import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Player } from '../Classes/Players';
import { Dino } from '../Classes/TamedDino';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/**
 *
 */
@Injectable()
export class DataClient {
    constructor(private http: Http) { }

    //Populate the list with an observable
    public getPlayers = (): Observable<Player[]>  => { 

        let results = new Array<Player>();                

        // Initial Transformation, Response --> Json
        return this.http.get("http://localhost:3276/App/Services/masterplayers.json")
            .map(this.extractData)
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'))
            //Second Transformation, JSON --> Angular Class Object            
            .map(this.JsonToPlayer) 
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));     
    } 

    private extractData(res: Response) {
        return res.json();
    }

    private JsonToPlayer = (players: Array<any>): Player[] => {
        let results = new Array<Player>();
        if (players) {
            // If we have player Json Objects, cast to Typescript Player Objects
            // and add to results a
            players.forEach((player) => {
                let p = <Player>player;
                results.push(p);
            });
        }
        return results;
    }

    public getDinos = (): Dino[] => {
        return new Array<Dino>();
    }

} 
