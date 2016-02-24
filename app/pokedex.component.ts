import  {Component} from 'angular2/core'



interface Pokemon{
    id:number,
    name:string,
    height:number
    
}
//this class is a component
@Component({
    selector:'pokedex',
    template:`<div class="container">
                   <h1>{{title}}</h1>
                   <h2>{{pokemon.name}}</h2>
                   <h2>{{pokemon.height}}</h2>
                   <div class="row">
                        <div class="col-md-12">
                            
                        </div>    
                   </div>
             </div>`
})
export class PokedexComponent{
    public title : string = "Pokedex";
    
    public pokemon: Pokemon={
        id:1,
        name:"bulbasaur",
        height:64
    }
}