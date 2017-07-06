import { Player } from "./Players"
    /**
     *
     */
    export class Tribe {
        public name: string;
        public members: Player[];
        public owner: Player;
        constructor(name: string, members: Player[], owner: Player) {
            this.name = name;
            this.members = members;
            this.owner = owner;
        }
    }


