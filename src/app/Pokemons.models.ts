export class Pokemon{
    id !:number;
    hp !:number;
    cp !:number;
    name !:string;
    picture !:string;
    types !:Array<string>;
    rarity !:string;
    created !: Date;
    

    constructor(){
        this.id=0;
        this.hp=0;
        this.cp=0;
        this.name='noName';
        this.picture='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png';
        this.rarity = "";
        this.types=['plante'];
        this.created=new Date();
    }
    
    
}

