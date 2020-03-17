//So first thought is to have the pokemonList contain a list of the pokemoncards and we will
//increase or decrease the number of cards through the button in the pokemoncard ??
/*
<PokemonCard name="Tyranitar" type1="Dark" type2="Rock"/>
<PokemonCard name="Garchomp" type1="Dragon" type2="Ground"/>
<PokemonCard name="Greninja" type1="Water" type2="Dark"/>
<PokemonCard name="Charizard" type1="Fire" type2="Flying"/>
<PokemonCard name="Poplio" type1="Water" type2=""/>
<PokemonCard name="Infernape" type1="Fire" type2="Fighting"/>
*/
class PokemonList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    //List of all the pokemon we are going to have in the team
    pokemonTeam= [['Tyranitar',"Dark","Rock"],["Garchomp","Dragon","Ground"],["Greninja","Water","Dark"],["Charizard","Fire","Flying"],["Alakazam","Psychic",""],["Infernape","Fire","Fighting"]];

    //Here we are creating a pokemon tag for every pokemon in our pokemon team list
    listItems = pokemonTeam.map((pokemon) =>
      <PokemonCard name={pokemon[0]} type1={pokemon[1]} type2={pokemon[2]}/>
    );

    return (
      <span>
        {listItems}
      </span>
    );
  }
}//This is the end of the pokemonlist file

class PokemonCard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    /* Hither is where I will make the card look nice for the pokemons
    card
    has name , types, button to remove itself*/
    const type2 = this.props.type2;
    //Just putting nothing important in here but i have ot initialize it somehow you know what I am saying !?!
    secondTypeIcon = <p> hi</p>;
    //If there is a type for the second type then we should make an icon that displays that .
    if(type2 != ""){
      secondTypeIcon =  <span id={this.props.type2} class=" border rounded border-dark typeCard">{this.props.type2}</span>;
    }
    else{
      //basically it is nothing
      secondTypeIcon = <span> </span>;
    }
    //Returing the general outline of the card we will have
    return(
      <div class="card border-info">
        <div class="card-header"> {this.props.name}
            <span class ="ml-auto">
              <span id={this.props.type1} class=" border rounded border-dark typeCard">{this.props.type1}</span>
              {secondTypeIcon}
            </span>
          </div>
          <div class="card-body">
            <button type="button" class="btn btn-danger btn-sm "> Remove Pokemon </button>
            <button type="button" class="btn btn-primary btn-sm"> Replace Pokemon </button>

          </div>
      </div>
    );
  }
}

ReactDOM.render(<PokemonList />, document.getElementById('pokemons'))
