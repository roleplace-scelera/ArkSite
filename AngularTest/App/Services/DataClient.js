"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
/**
 *
 */
var DataClient = (function () {
    function DataClient(http) {
        var _this = this;
        this.http = http;
        /**
        * Populate the list with an observable
        */
        this.getPlayers = function () {
            // Observable<Player[]>
            var results = new Array();
            // Initial Transformation, Response --> Json
            return _this.http.get("http://localhost:3276/App/Services/masterplayers.json")
                .map(_this.extractData)
                .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server Error'); })
                .map(_this.JsonToPlayer)
                .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server Error'); });
        };
        this.JsonToPlayer = function (players) {
            var results = new Array();
            if (players) {
                // If we have player Json Objects, cast to Typescript Player Objects
                // and add to results a
                players.forEach(function (player) {
                    var p = player;
                    results.push(p);
                });
            }
            return results;
        };
        this.getDinos = function () {
            return new Array();
        };
    }
    DataClient.prototype.extractData = function (res) {
        return res.json();
    };
    return DataClient;
}());
DataClient = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataClient);
exports.DataClient = DataClient;
//# sourceMappingURL=DataClient.js.map