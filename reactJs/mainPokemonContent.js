//So first thought is to have the pokemonList contain a list of the pokemoncards and we will
//increase or decrease the number of cards through the button in the pokemoncard ??
//https://clips.twitch.tv/AverageGeniusMinkMingLee leffen likes toradora

class PokemonMainContent extends React.Component{
  constructor(props){
    super(props);
    //the pokemonMainContent has 6 pokemon with a list of two elements
    //the elements in each poke list are the types of the pokemon
    this.state = {
      poke1 : ['',''],
      poke2 : ['',''],
      poke3 : ['',''],
      poke4 : ['',''],
      poke5 : ['',''],
      poke6 : ['','']
    };

    //binding the function to here this pokemonMainContent class
    this.updatePoke = this.updatePoke.bind(this);
    //then I need to tie each one to one of the functions to a card in the pokemon list

    //Finally I need to tie the tableStuff to the state of each of these pokemons
    //it will read the type then basd on the type it will whether it is weak to that pokemon type or not
    //at long last it will update the table based on the info it gets from the type stuff
  }

//the function takes in both types of the pokemon and updates the state here that the pokemon type has changed
//it also takes in the pokenumber (where it is on the list) so that I only use one function to update any of the values
//[pokeNum] means we put the value of pokeNum as the key for the state
  updatePoke(pokeNum, type1,type2){
    this.setState({ [pokeNum]: [type1,type2]});
  }

  render(){
    //the div is a row that way neither pokemonList or TableType tries to go to the other row. THe row class confines it to current row unless I say otherwise
    return(
      <div class=" row">
          <PokemonList onPokemonUpdate={this.updatePoke} />
          <TableType />
      </div>
    );
  }//end of render
}//end of pokemonMainContent class

class TableType extends React.Component{
  constructor(props){
    super(props);
    /* Ok right here if I want to do anything with the props they sent in they I might have it interact with the state*/
    this.pokemonTypeWeakness = this.pokemonTypeWeakness.bind(this);
    this.pokemonWeakness = this.pokemonWeakness.bind(this);

  }//end of constructor for TableType

//In this function we are going to return the list that has the effectiveness of different moves against this type
//bug [1,.5,2,1,...] the first item means that bug types are x1 effective vs bug the second one means that dark are .5x effective against but (NOT TRUE)
  pokemonTypeWeakness(type){
    switch(type){
      case "Bug":
      //remember this lilst is the effectiveness of types AGAINST bug type pokemon
      //x2 effective are fire flying and rock
      //.5 effective is fighting grass, ground
        bugList = [1,1,1,1,1,.5,2,2,1,.5,.5,1,1,1,1,2,1,1];
        return bugList;
        break;//pretty sure this is never triggered but better to be safe than sorry
      case "Dark":
        darkList =[2,.5,1,1,2,2,1,1,.5,1,1,1,1,1,0,1,1,1];
        return darkList;
        break;
      case "Dragon":
        dragonList =[1,1,2,.5,2,1,.5,1,1,.5,1,2,1,1,1,1,1,.5];
        return dragonList;
        break;
      case "Electric":
        electricList =[1,1,1,.5,1,1,1,.5,1,1,2,1,1,1,1,1,.5,1];
        return electricList;
        break;
      case "Fairy":
        fairyList =[.5,.5,0,1,1,.5,1,1,1,1,1,1,1,2,1,1,2,1];
        return fairyList;
        break;
      case "Fighting":
        fightingList =[.5,.5,1,1,2,1,1,2,1,1,1,1,1,1,2,.5,1,1];
        return fightingList;
        break;
      case "Fire":
        fireList =[.5,1,1,1,.5,1,.5,1,1,.5,2,.5,1,1,1,2,.5,2];
        return fireList;
        break;
      case "Flying":
        flyingList =[.5,1,1,2,1,.5,1,1,1,.5,0,2,1,1,1,2,1,1];
        return flyingList;
        break;
      case "Ghost":
        ghostList =[.5,2,1,1,1,0,1,1,2,1,1,1,0,.5,1,1,1,1];
        return ghostList;
        break;
      case "Grass":
        grassList =[2,1,1,.5,1,1,2,2,1,.5,.5,2,1,2,1,1,1,.5];
        return grassList;
        break;
      case "Ground":
        groundList =[1,1,1,0,1,1,1,1,1,2,1,2,1,.5,1,.5,1,2];
        return groundList;
        break;
      case "Ice":
        iceList =[1,1,1,1,1,2,2,1,1,1,1,.5,1,1,1,2,2,1];
        return iceList;
        break;
      case "Normal":
        normalList =[1,1,1,1,1,2,1,1,0,1,1,1,1,1,1,1,1,1];
        return normalList;
        break;
      case "Poison":
        poisonList =[.5,1,1,1,.5,.5,1,1,1,.5,2,1,1,.5,2,1,1,1];
        return poisonList;
        break;
      case "Psychic":
        psychicList =[2,2,1,1,1,.5,1,1,2,1,1,1,1,1,.5,1,1,1];
        return psychicList;
        break;
      case "Rock":
        rockList =[1,1,1,1,1,2,.5,.5,1,2,2,1,.5,.5,1,1,2,2];
        return rockList;
        break;
      case "Steel":
        steelList =[.5,1,.5,1,.5,2,2,.5,1,.5,2,.5,.5,0,.5,.5,.5,1];
        return steelList;
        break;
      case "Water":
        waterList =[1,1,1,2,1,1,.5,1,1,2,1,.5,1,1,1,1,.5,.5];
        return waterList;
        break;
        //if we do not get a type then we go here which should not impact the other type of the pokemon because the list is 1's
      default:
      //if we are not given a real type we return 1 for all
        return [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    }
  }

  pokemonWeakness(type1, type2){
    returnList = [];
    list1 = pokemonTypeWeakness(type1);
    list2 = pokemonTypeWeakness(type2);
    //Getting the  length of list 2 in all honesty I know the size maybe putting in a hard value is better than getting it every time...
    length = list2.length;
    //assigning the length of returnList to be the same as the other lists
    returnList.length = length;

//for loop that iterates for the size of the list and will fill returnList with proper values
    for(i =0; i < length ; ++i){
      //the value of returnList is list1 * list2 because that is how types work in pokemon
      returnList[i] = list1[i] * list2[i];
    }
    //returning returnList
    return returnList;
  }

  render(){
    table = (
      <div class="col-sm-12 col-lg-6" >
        <TableRow type="0" />
        <TableRow type="Bug" />
        <TableRow type="Dark" />
        <TableRow type="Dragon" />
        <TableRow type="Electric" />
        <TableRow type="Fairy" />
        <TableRow type="Fighting" />
        <TableRow type="Fire" />
        <TableRow type="Flying" />
        <TableRow type="Ghost" />
        <TableRow type="Grass" />
        <TableRow type="Ground" />
        <TableRow type="Ice" />
        <TableRow type="Normal" />
        <TableRow type="Poison" />
        <TableRow type="Psychic" />
        <TableRow type="Rock" />
        <TableRow type="Steel" />
        <TableRow type="Water" />
      </div>)
    return (
      table
    );/*This is the end of return */
  }
}

class TableRow extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const type = this.props.type;
    let returnedRow;
    if ( type != "0") {
      returnedRow = (
        <tr class="type" id={this.props.type} > {this.props.type}
          <TableSquare word="Zero " />
          <TableSquare word="Point 25" />
          <TableSquare word="Point 5" />
          <TableSquare word="Integer 1" />
          <TableSquare word="Integer 2" />
          <TableSquare word="Integer 4" />
        </tr>
      );
    }
    else{
      returnedRow = (
        <tr id="RowWeakness"> Strength of Hit
            <td > 0x </td>
            <td> 0.25x </td>
            <td > 0.5x </td>
            <td> 1x </td>
            <td > 2x </td>
            <td> 4x </td>
        </tr>
      );
    }
    return(
      returnedRow
    );
  }
}

class TableSquare extends React.Component{
  constructor(props){
    super(props);
    this.state = {num : 0};
  }

  render(){
    return(
        <td class="square"> {this.state.num} {this.props.word} </td>
    );
  }
}


class PokemonList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    //List of all the pokemon we are going to have in the team
    pokemonTeam= [['Tyranitar',"Dark","Rock"],["Garchomp","Dragon","Ground"],["Greninja","Water","Dark"],["Charizard","Fire","Flying"],["Alakazam","Psychic",""],["Infernape","Fire","Fighting"]];

/*
rn I have
this.props.onPokemonUpdate  <--- this has the function that updates the state of the papa depending on the poke number we are
*/
    //Here we are creating a pokemon tag for every pokemon in our pokemon team list
    //every pokemon is getting a function that changes this parents (their grandparents) state
    listItems = pokemonTeam.map((pokemon,index) =>{
      increasedIndex = (index+1);
      return (<PokemonCard name={pokemon[0]} type1={pokemon[1]} type2={pokemon[2]} stateNum={"poke"+increasedIndex} singlePokeUpdate={this.props.onPokemonUpdate}/>);
    }
    );

    return (
      <div class="col-sm-12 col-lg-6">
        {listItems}
      </div >
    );
  }
}//This is the end of the pokemonlist file

class PokemonCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {isActive:false};
    //binding the function to this place
    this.addPokemonFunc = this.addPokemonFunc.bind(this);
    this.removePokemonFunc = this.removePokemonFunc.bind(this);
  }

//creating a function to change the state of a pokemon  to true when we have added a pokemon
  addPokemonFunc(){
    this.setState({isActive: true});
    //not just that but I need to update the grandparents state to tell them that I must do this
    //updateing the grandparents state with the new pokemon type we have every time we add a pokemon
    this.props.singlePokeUpdate(this.props.stateNum,this.props.type1,this.props.type2);
  }

//creating a function to change the state of a pokemon to false when we choose to remove a pokemon. I typed out this whole comment again even though it is almost identical to the other one.
  removePokemonFunc(){
    this.setState({isActive:false});
    //every time we remove a pokemon we basically remove it by not giving it a type 
    this.props.singlePokeUpdate(this.props.stateNum,'','');

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

ReactDOM.render(<PokemonMainContent />, document.getElementById('pokemons'));
