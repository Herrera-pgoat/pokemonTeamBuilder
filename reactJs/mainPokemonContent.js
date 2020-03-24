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
      <div class="row">
          <PokemonList onPokemonUpdate={this.updatePoke} />
          <TableType pokeTypeInfo={[this.state.poke1,this.state.poke2,this.state.poke3,this.state.poke4,this.state.poke5,this.state.poke6]}/>
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
        bugList1 = [1,1,1,1,1,.5,2,2,1,.5,.5,1,1,1,1,2,1,1];
        return bugList1;
        break;//pretty sure this is never triggered but better to be safe than sorry
      case "Dark":
        darkList1 = [2,.5,1,1,2,2,1,1,.5,1,1,1,1,1,0,1,1,1];
        return darkList1;
        break;
      case "Dragon":
        dragonList1 =[1,1,2,.5,2,1,.5,1,1,.5,1,2,1,1,1,1,1,.5];
        return dragonList1;
        break;
      case "Electric":
        electricList1 =[1,1,1,.5,1,1,1,.5,1,1,2,1,1,1,1,1,.5,1];
        return electricList1;
        break;
      case "Fairy":
        fairyList1 =[.5,.5,0,1,1,.5,1,1,1,1,1,1,1,2,1,1,2,1];
        return fairyList1;
        break;
      case "Fighting":
        fightingList1 =[.5,.5,1,1,2,1,1,2,1,1,1,1,1,1,2,.5,1,1];
        return fightingList1;
        break;
      case "Fire":
        fireList1 =[.5,1,1,1,.5,1,.5,1,1,.5,2,.5,1,1,1,2,.5,2];
        return fireList1;
        break;
      case "Flying":
        flyingList1 =[.5,1,1,2,1,.5,1,1,1,.5,0,2,1,1,1,2,1,1];
        return flyingList1;
        break;
      case "Ghost":
        ghostList1 =[.5,2,1,1,1,0,1,1,2,1,1,1,0,.5,1,1,1,1];
        return ghostList1;
        break;
      case "Grass":
        grassList1 =[2,1,1,.5,1,1,2,2,1,.5,.5,2,1,2,1,1,1,.5];
        return grassList1;
        break;
      case "Ground":
        groundList1 =[1,1,1,0,1,1,1,1,1,2,1,2,1,.5,1,.5,1,2];
        return groundList1;
        break;
      case "Ice":
        iceList1 =[1,1,1,1,1,2,2,1,1,1,1,.5,1,1,1,2,2,1];
        return iceList1;
        break;
      case "Normal":
        normalList1 =[1,1,1,1,1,2,1,1,0,1,1,1,1,1,1,1,1,1];
        return normalList1;
        break;
      case "Poison":
        poisonList1 =[.5,1,1,1,.5,.5,1,1,1,.5,2,1,1,.5,2,1,1,1];
        return poisonList1;
        break;
      case "Psychic":
        psychicList1 =[2,2,1,1,1,.5,1,1,2,1,1,1,1,1,.5,1,1,1];
        return psychicList1;
        break;
      case "Rock":
        rockList1 =[1,1,1,1,1,2,.5,.5,1,2,2,1,.5,.5,1,1,2,2];
        return rockList1;
        break;
      case "Steel":
        steelList1 =[.5,1,.5,1,.5,2,2,.5,1,.5,2,.5,.5,0,.5,.5,.5,1];
        return steelList1;
        break;
      case "Water":
        waterList1 =[1,1,1,2,1,1,.5,1,1,2,1,.5,1,1,1,1,.5,.5];
        return waterList1;
        break;
        //if we do not get a type then we go here which should not impact the other type of the pokemon because the list is 1's
      default:
      //if we are not given a real type we return 1 for all
        return [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
    }
  }

//Function to determine what are the type things when we pass in the two types of the pokemon
  pokemonWeakness(type1, type2){
    list1 = this.pokemonTypeWeakness(type1);
    list2 = this.pokemonTypeWeakness(type2);

    //if there is no second type then we return list1
    if(list2[0]==-1){
      return list1;
    }
    //if there is a second type we go through the works and combine the lists
    else{
      //creating the list that will store the combination of lsit1&llist2
      returnList = [];

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
  }//end of pokemonWeakness

  render(){
    //lists of how each pokemon reacts to each different types
    bugList = [];
    darkList = [];
    dragonList = [];
    electricList = [];
    fairyList = [];
    fightingList = [];
    fireList = [];
    flyingList = [];
    ghostList = [];
    grassList = [];
    groundList = [];
    iceList = [];
    normalList = [];
    poisonList = [];
    psychicList = [];
    rockList = [];
    steelList = [];
    waterList = [];

//getting all the pokemontypes and putting it in a variable that way I don't have to use this.props. ...
    const allPokemonTypes = this.props.pokeTypeInfo;

    for ( let i =0; i <6 ; i++){
      //getting the type stuff of one pokemon ;)
      type1 = allPokemonTypes[i][0];
      type2 = allPokemonTypes[i][1];

      //onePokemon has the type stuff of this singlePokemon
      onePokemon = this.pokemonWeakness(type1,type2);

      //basically if there is no type we don't even push anything to the lists
      if(onePokemon[0]==-1){
        continue;
      }
      //adding the type to each list effectiveness
      bugList.push(onePokemon[0]);
      darkList.push(onePokemon[1]);
      dragonList.push(onePokemon[2]);
      electricList.push(onePokemon[3]);
      fairyList.push(onePokemon[4]);
      fightingList.push(onePokemon[5]);
      fireList.push(onePokemon[6]);
      flyingList.push(onePokemon[7]);
      ghostList.push(onePokemon[8]);
      grassList.push(onePokemon[9]);
      groundList.push(onePokemon[10]);
      iceList.push(onePokemon[11]);
      normalList.push(onePokemon[12]);
      poisonList.push(onePokemon[13]);
      psychicList.push(onePokemon[14]);
      rockList.push(onePokemon[15]);
      steelList.push(onePokemon[16]);
      waterList.push(onePokemon[17]);
    }//end of the for loop

    table = (
      <div class="col-sm-12 col-lg-6" >
        <TableRow type="0"/>
        <TableRow type="Bug" list={bugList} />
        <TableRow type="Dark" list={darkList} />
        <TableRow type="Dragon" list={dragonList} />
        <TableRow type="Electric" list={electricList} />
        <TableRow type="Fairy" list={fairyList} />
        <TableRow type="Fighting" list={fightingList} />
        <TableRow type="Fire" list={fireList} />
        <TableRow type="Flying" list={flyingList}  />
        <TableRow type="Ghost" list={ghostList} />
        <TableRow type="Grass" list={grassList} />
        <TableRow type="Ground" list={groundList} />
        <TableRow type="Ice" list={iceList} />
        <TableRow type="Normal" list={normalList} />
        <TableRow type="Poison" list={poisonList} />
        <TableRow type="Psychic" list={psychicList} />
        <TableRow type="Rock" list={rockList} />
        <TableRow type="Steel" list={steelList} />
        <TableRow type="Water" list={waterList} />
      </div>);
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
    //now we have this.props.list they are all named this.props.list
    //so I iterate through the list and send the amount of times i see 0,.25..5.1.2.4 to each of the tablesquares
    if ( type != "0") {
      //getting the count of each time one of the numbers I expect to appear appears.
      let zeroCount = 0;
      let oneFourthCount = 0;
      let oneHalfCount = 0;
      let oneCount = 0;
      let twoCount = 0;
      let fourCount = 0;

      //getting the prop in a local variable
      const typeList = this.props.list;

      //this is like a for each loop in python. In all honesty if an interview asked me what the difference between this and a for each loop I wouldn't know what to say!
      //going through each element in typeList which has type effectiveness of that move type versus my pokemons
      for (const number of typeList){
        if (number == 0)
          ++zeroCount;
          else if(number == .25)
            ++oneFourthCount;
          else if(number == .5)
            ++oneHalfCount;
          else if (number == 1)
            ++oneCount;
          else if (number == 2)
            ++twoCount;
          else if (number == 4)
            ++fourCount;
      }
      //Here I am sending all the squares the type of square it is that way when I look at it in react developer tools I know what I am looking at.
      returnedRow = (
        <tr class="type" id={this.props.type} > {this.props.type}
          <TableSquare type={this.props.type} word="Zero" total={zeroCount} />
          <TableSquare type={this.props.type} word="Point 25" total={oneFourthCount}/>
          <TableSquare type={this.props.type} word="Point 5" total={oneHalfCount}/>
          <TableSquare type={this.props.type} word="Integer 1" total={oneCount}/>
          <TableSquare type={this.props.type} word="Integer 2" total={twoCount}/>
          <TableSquare type={this.props.type} word="Integer 4" total={fourCount}/>
        </tr>
      );
    }
    else{
      returnedRow = (
        <tr id="RowWeakness"> Strength of Hit
            <td class="effectivenessSquare text-center" > 0x </td>
            <td class="effectivenessSquare text-center"> 0.25x </td>
            <td class="effectivenessSquare text-center"> 0.5x </td>
            <td class="effectivenessSquare text-center"> 1x </td>
            <td class="effectivenessSquare text-center"> 2x </td>
            <td class="effectivenessSquare text-center"> 4x </td>
        </tr>
      );
    }
    return(
      returnedRow
    );
  }
}

//class for each of my tablesquares
class TableSquare extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
        <td class="square"> {this.props.total} </td>
    );
  }
}


class PokemonList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    //List of all the pokemon we are going to have in the team
    //when I do connect the database I need to update this list any time they add a pokemon.
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
}//This is the end of the pokemonlist class

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
