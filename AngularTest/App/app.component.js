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
var core_1 = require("@angular/core");
var DataClient_1 = require("./Services/DataClient");
var AppComponent = (function () {
    function AppComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        /**
        * Populate players using Observable Subscription
        */
        this.getPlayers = function () {
            var results = new Array();
            /**
            * In order to proccess an observable collection, it MUST be subscribed too.
            * Observables are like Promises + Events
            */
            _this.dataService.getPlayers().subscribe(function (players) {
                players.forEach(function (player) {
                    _this.results.push(player);
                });
            });
            return results;
        };
        this.name = "ArkSite";
        this.results = this.getPlayers();
        console.log(this.results.toString());
        this.results.forEach(function (player) {
            console.log(player.name + " did this work?");
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css'],
        providers: [DataClient_1.DataClient],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [DataClient_1.DataClient])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map