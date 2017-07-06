
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
    export enum Color {
        Red = 1,
	    Blue = 2, 	
        Green = 3,	
        Yellow = 4,	
	    Cyan = 5,	
	    Magenta	= 6, 
	    Light_Green = 7,	
	    Light_Grey = 8,	
	    Light_Brown = 9,	
        Light_Orange = 10,
	    Light_Yellow = 11,	
	    Light_Red = 12,	
	    Dark_Grey = 13,	
	    Black = 14,	
	    Brown = 15,	
	    Dark_Green = 16,
	    Dark_Red = 17,	
	    White = 18,	
	    Dino_Light_Red= 19,	
	    Dino_Dark_Red = 20,	
        Dino_light_Orange = 12	
    }

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
        fortitude = 10
    }

    /** BASE CLASS
    * # of Points Dino has Per Attribute
    *  --> Either semi-randomly added for Wild
    *      or player-chosen for Tamed
    * Dinos will have 1 point / level regardless
    * Possible for a stat to have 0 levels, meaning it will
    * have no bonus to base stats, therefore we will make
    * all paramaters optional 
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

        constructor(health?: number, stamina?: number, torpor?: number,
            oxygen?: number, food?: number, water?: number, temperature?: number,
            weight?: number, melee?: number, speed?: number, fortitude?: number) {
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
    }

    /*************************************************************
    ** TODO: Stat Multipliers Given Server Settings Per Dino State
    *************************************************************/

    /**
     * Points / attribute gained while 'Wild' State
     */
    export class WildLevelStatPoints extends StatPoints {
        constructor(health?: number, stamina?: number, torpor?: number, oxygen?:
            number, food?: number, water?: number, temperature?: number, weight?:
            number, melee?: number, fortitude?: number, speed?: number) {        
            super(health, stamina, torpor, oxygen, food, water, temperature, weight, melee, fortitude, speed);
        }
    }

    /**
    * Points / attribute gained while 'Tamed' State
    */
    export class TamedLevelStatPoints extends StatPoints {
        constructor(health?: number, stamina?: number, torpor?: number, oxygen?:
            number, food?: number, water?: number, temperature?: number, weight?:
            number, melee?: number, fortitude?: number, speed?: number) {
            super(health, stamina, torpor, oxygen, food, water, temperature, weight, melee, fortitude, speed);
        }
    }

    /**
     * Wild Base Dino Class!
     * Kept variable names/casings = JSON
     * returned from the Ark SAVE Byte Parser
     * --> So BITE ME
     */
    export class Dino {
        // Coordinates 
        public x: number;
        public y: number;
        public z: number;
        public lat: number;          //lattitude
        public lon: number;          //longetude
        public id: number;
        public female: boolean;     //FEEEMAAALEEE
        public tamed: boolean;
        public baseLevel: number;   //level tamed / birthed at
        public wildLevels: WildLevelStatPoints;

        // TODO: Map json numbers to dino body part maybe?
        public color0?: Color;
        public color1?: Color;
        public color2?: Color;
        public color3?: Color;
        public color4?: Color;
        public color5?: Color;

        constructor(x: number, y: number, z: number, lat: number, lon: number, id: number,
            female: boolean, baseLevel: number, wildLevels: WildLevelStatPoints, experience: number,
            color0?: Color, color1?: Color, color2?: Color, color3?: Color, color4?: Color, color5?: Color) {
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
    }

    /** Player Tamed Dinos!
     *  --> Have all the same stats as normal,
     *  with added Tribe / Player relationships,
     *  as well as bonus tamed stats 
     */
    export class TamedDino extends Dino {
        public experience: number;
        public team: number;         //not sure, will come back (maybe tribe ID?)
        public playerId: number;     //player currently owned by 
        public tamedAtTime: number;
        public tamedTime: number; 
        public tribe: string;   
        public tamer: string;       //player who performed the tame 
        public ownerName: string;
        public name: string;
        public fullLevel: number;   //total level or point sum
        public tamedLevels: TamedLevelStatPoints;

        constructor(x: number, y: number, z: number, lat: number, lon: number, id: number,
            female: boolean, baseLevel: number, wildLevels: WildLevelStatPoints, team: number, experience: number,
            playerId: number, tamedAtTime: number, tamedTime: number, tribe: string, tamer: string,
            ownerName: string, name: string, fullLevel: number, tamedLevels: TamedLevelStatPoints,
            color0?: Color, color1?: Color, color2?: Color, color3?: Color, color4?: Color, color5?: Color){

            super(x, y, z, lat, lon, id, female, baseLevel, wildLevels, experience, color0, color1, color2,
                color3, color4, color5);
            this.experience = experience;
            this.team = team;
            this.playerId = playerId;
            this.tamedAtTime = tamedAtTime;
            this.tamedTime = tamedTime;
            this.tribe = tribe;
            this.tamer = tamer;
            this.ownerName = ownerName;
            this.name = name;
            this.fullLevel = fullLevel;
            this.tamedLevels = tamedLevels;
        }   
    }

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

