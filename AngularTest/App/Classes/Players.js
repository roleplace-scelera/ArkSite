"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    Stats[Stats["crafting"] = 11] = "crafting";
})(Stats = exports.Stats || (exports.Stats = {}));
/**
 *
 */
var StatPoints = (function () {
    function StatPoints(health, stamina, torpor, oxygen, food, water, temperature, weight, melee, speed, fortitude, crafting) {
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
        this.crafting = crafting;
    }
    return StatPoints;
}());
exports.StatPoints = StatPoints;
/**
 *
 */
var Player = (function () {
    function Player(steamID, id, playerName, name, level, experience, attributes, tribeId, tribeName, tribeOwner) {
        this.steamID = steamID;
        this.id = id;
        this.playerName = playerName;
        this.name = name;
        this.level = level;
        this.experience = experience;
        this.attributes = attributes;
        this.tribeId = tribeId;
        this.tribeName = tribeName;
        this.triberOwner = tribeOwner;
    }
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=Players.js.map