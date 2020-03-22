//So first thought is to have the pokemonList contain a list of the pokemoncards and we will
//increase or decrease the number of cards through the button in the pokemoncard ??
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
    this.state = {isActive:true};
    //binding the function to this place
    this.addPokemonFunc = this.addPokemonFunc.bind(this);
    this.removePokemonFunc = this.removePokemonFunc.bind(this);

  }

//creating a function to change the state of a pokemon  to true when we have added a pokemon
  addPokemonFunc(){
    this.setState({isActive: true});
  }

//creating a function to change the state of a pokemon to false when we choose to remove a pokemon. I typed out this whole comment again even though it is almost identical to the other one.
  removePokemonFunc(){
    this.setState({isActive:false});
  }

  render(){
    /* Hither is where I will make the card look nice for the pokemons
    card
    has name , types, button to remove itself*/
    //Here we should check if this card is active. WHen the card is active we show the pokemon and when it is not we show just add pokemon button
    active = this.state.isActive;
    if (active){
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
        <div class="pokeCard card border-info">
          <div class="card-header"> {this.props.name}
              <span class ="ml-auto">
                <span id={this.props.type1} class=" border rounded border-dark typeCard">{this.props.type1}</span>
                {secondTypeIcon}
              </span>
            </div>
            <div class="card-body">
              <button type="button" class="btn btn-danger btn-sm " onClick={this.removePokemonFunc}> Remove Pokemon </button>
              <button type="button" class="btn btn-primary btn-sm"> Replace Pokemon </button>

            </div>
        </div>
      );
    }//end of the case where it is active
//what we should do if the card is not active. AKA there is no pokemon showing
    else{
      //Returing the general outline of the card we will have
      return(
        <div class="pokeCard card border-info">
            <div class="card-body">
              <div>
                <label for="addPokemon"> Add Pokemon </label>
                <input id="addPokemon" type="text"class="" placeholder="Type Pokemon Name!" />
              </div>
              <button type="button" class="btn btn-danger btn-sm" onClick={this.addPokemonFunc} > Add Pokemon </button>
            </div>
        </div>
      );//end of the return
    }//end of the else statement
  }//end of render function
}

ReactDOM.render(<PokemonList />, document.getElementById('pokemons'));
