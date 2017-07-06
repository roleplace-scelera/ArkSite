"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/****************************************************
 *  Container for all relevant dino-related objects
 *  Stats, Vanities, Levels, etc.
 ***************************************************/
/**
* Ark Supports 56 colors (Starting at 1)
* Represented as Integer values mapped below
*
*** TODO:
*   Add the rest of these Godamn Things
*/
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Yellow"] = 4] = "Yellow";
    Color[Color["Cyan"] = 5] = "Cyan";
    Color[Color["Magenta"] = 6] = "Magenta";
    Color[Color["Light_Green"] = 7] = "Light_Green";
    Color[Color["Light_Grey"] = 8] = "Light_Grey";
    Color[Color["Light_Brown"] = 9] = "Light_Brown";
    Color[Color["Light_Orange"] = 10] = "Light_Orange";
    Color[Color["Light_Yellow"] = 11] = "Light_Yellow";
    Color[Color["Light_Red"] = 12] = "Light_Red";
    Color[Color["Dark_Grey"] = 13] = "Dark_Grey";
    Color[Color["Black"] = 14] = "Black";
    Color[Color["Brown"] = 15] = "Brown";
    Color[Color["Dark_Green"] = 16] = "Dark_Green";
    Color[Color["Dark_Red"] = 17] = "Dark_Red";
    Color[Color["White"] = 18] = "White";
    Color[Color["Dino_Light_Red"] = 19] = "Dino_Light_Red";
    Color[Color["Dino_Dark_Red"] = 20] = "Dino_Dark_Red";
    Color[Color["Dino_light_Orange"] = 12] = "Dino_light_Orange";
})(Color = exports.Color || (exports.Color = {}));
/**
* Integer <--> Attribute Mappings
* As according to Ark Game.ini
*/
var Stats;
(function (Stats) {
    Stats[Stats["health"] = 0] = "health";
    Stats[Stats["stamina"] = 1] = "stamina";
    Stats[Stats["torpor"] = 2] = "torpor";
    Stats[Stats["oxygen"] = 3] = "oxygen";
    Stats[Stats["food"] = 4] = "food";
    Stats[Stats["water"] = 5] = "water";
    Stats[Stats["temperature"] = 6] = "temperature";
    Stats[Stats["weight"] = 7] = "weight";
    Stats[Stats["melee"] = 8] = "melee";
    Stats[Stats["speed"] = 9] = "speed";
    Stats[Stats["fortitude"] = 10] = "fortitude";
})(Stats = exports.Stats || (exports.Stats = {}));
/** BASE CLASS
* # of Points Dino has Per Attribute
*  --> Either semi-randomly added for Wild
*      or player-chosen for Tamed
* Dinos will have 1 point / level regardless
* Possible for a stat to have 0 levels, meaning it will
* have no bonus to base stats, therefore we will make
* all paramaters optional
*/
var StatPoints = (function () {
    function StatPoints(health, stamina, torpor, oxygen, food, water, temperature, weight, melee, speed, fortitude) {
        this.health = health;
        this.stamina = stamina;
        this.torpor = torpor;
        this.oxygen = oxygen;
        this.food = food;
        this.water = water;
        this.temperature = temperature;
        this.weight = weight;
        this.melee = melee;
        this.speed = speed;
        this.fortitude = fortitude;
    }
    return StatPoints;
}());
exports.StatPoints = StatPoints;
/*************************************************************
** TODO: Stat Multipliers Given Server Settings Per Dino State
*************************************************************/
/**
 * Points / attribute gained while 'Wild' State
 */
var WildLevelStatPoints = (function (_super) {
    __extends(WildLevelStatPoints, _super);
    function WildLevelStatPoints(health, stamina, torpor, oxygen, food, water, temperature, weight, melee, fortitude, speed) {
        return _super.call(this, health, stamina, torpor, oxygen, food, water, temperature, weight, melee, fortitude, speed) || this;
    }
    return WildLevelStatPoints;
}(StatPoints));
exports.WildLevelStatPoints = WildLevelStatPoints;
/**
* Points / attribute gained while 'Tamed' State
*/
var TamedLevelStatPoints = (function (_super) {
    __extends(TamedLevelStatPoints, _super);
    function TamedLevelStatPoints(health, stamina, torpor, oxygen, food, water, temperature, weight, melee, fortitude, speed) {
        return _super.call(this, health, stamina, torpor, oxygen, food, water, temperature, weight, melee, fortitude, speed) || this;
    }
    return TamedLevelStatPoints;
}(StatPoints));
exports.TamedLevelStatPoints = TamedLevelStatPoints;
/**
 * Wild Base Dino Class!
 * Kept variable names/casings = JSON
 * returned from the Ark SAVE Byte Parser
 * --> So BITE ME
 */
var Dino = (function () {
    function Dino(x, y, z, lat, lon, id, female, baseLevel, wildLevels, experience, color0, color1, color2, color3, color4, color5) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.lat = lat;
        this.lon = lon;
        this.id = id;
        this.female = female;
        this.baseLevel = baseLevel;
        this.wildLevels = wildLevels;
        this.color0 = color0;
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
        this.color4 = color4;
        this.color5 = color5;
    }
    return Dino;
}());
exports.Dino = Dino;
/** Player Tamed Dinos!
 *  --> Have all the same stats as normal,
 *  with added Tribe / Player relationships,
 *  as well as bonus tamed stats
 */
var TamedDino = (function (_super) {
    __extends(TamedDino, _super);
    function TamedDino(x, y, z, lat, lon, id, female, baseLevel, wildLevels, team, experience, playerId, tamedAtTime, tamedTime, tribe, tamer, ownerName, name, fullLevel, tamedLevels, color0, color1, color2, color3, color4, color5) {
        var _this = _super.call(this, x, y, z, lat, lon, id, female, baseLevel, wildLevels, experience, color0, color1, color2, color3, color4, color5) || this;
        _this.experience = experience;
        _this.team = team;
        _this.playerId = playerId;
        _this.tamedAtTime = tamedAtTime;
        _this.tamedTime = tamedTime;
        _this.tribe = tribe;
        _this.tamer = tamer;
        _this.ownerName = ownerName;
        _this.name = name;
        _this.fullLevel = fullLevel;
        _this.tamedLevels = tamedLevels;
        return _this;
    }
    return TamedDino;
}(Dino));
exports.TamedDino = TamedDino;
// omg so many enums stopping here
//22	Dino Dark Orange	
//23	Dino Light Yellow	
//24	Dino Dark Yellow	
//25	Dino Light Green	
//26	Dino Medium Green	
//27	Dino Dark Green	
//28	Dino Light Blue
//29	Dino Dark Blue	
//30	Dino Light Purple	
//31	Dino Dark Purple	
//32	Dino Light Brown
//33	Dino Medium Brown	
//34	Dino Dark Brown	
//35	Dino Darker Grey	
//36	Dino Albino	
//37	BigFoot0	
//38	BigFoot4	
//39	BigFoot5	
//40	Wolf Fur
//41	Dark Wolf Fur	
//42	DragonBase0	
//43	DragonBase1	
//44	DragonFire	
//45	DragonGreen0	
//46	DragonGreen1	
//47	DragonGreen2	
//48	DragonGreen3	
//49	WyvernPurple0	
//50	WyvernPurple1	
//51	WyvernBlue0	
//52	WyvernBlue1	
//53	Dino Medium 	
//54	Dino Deep Blue	
//55	NearWhite	
//56	NearBlack	
//# sourceMappingURL=TamedDino.js.map