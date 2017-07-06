   /**
    * Integer <--> Attribute Mappings
    * As according to Ark Game.ini
    */
    export enum Stats {
        health = 0,
        stamina = 1,
        torpor = 2,
        oxygen = 3,
        food = 4,
        water = 5,
        temperature = 6,
        weight = 7,
        melee = 8,
        speed = 9,
        fortitude = 10,
        crafting = 11
    }

    /**
     * 
     */
    export class StatPoints {
        health?: number;
        stamina?: number;
        torpor?: number;
        oxygen?: number;
        food?: number;
        water?: number;
        temperature?: number;
        weight?: number;
        melee?: number;
        speed?: number;
        fortitude?: number;
        crafting?: number;

        constructor(health?: number, stamina?: number, torpor?: number,
            oxygen?: number, food?: number, water?: number, temperature?: number,
            weight?: number, melee?: number, speed?: number, fortitude?: number, crafting?: number) {
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
    }

    /**
     * 
     */
    export class Player {
        public steamID: number;        // Steam 64
        public id: number;             // Ark Game Identifier 
        public playerName: string;     // Steam Name
        public name: string;           // Ark Game Name
        public level: number;
        public experience: number;
        public attributes: StatPoints;
        public tribeId?: number;
        public tribeName?: string;
        public triberOwner?: boolean;

        constructor(steamID: number, id: number, playerName: string, name: string, level: number,
            experience: number, attributes: StatPoints, tribeId?: number, tribeName?: string, tribeOwner?: boolean) {
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
    }