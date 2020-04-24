var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//So first thought is to have the pokemonList contain a list of the pokemoncards and we will
//increase or decrease the number of cards through the button in the pokemoncard ??
var PokemonMainContent = function (_React$Component) {
  _inherits(PokemonMainContent, _React$Component);

  function PokemonMainContent(props) {
    _classCallCheck(this, PokemonMainContent);

    //the pokemonMainContent has 6 pokemon with a list of two elements
    //the elements in each poke list are the types of the pokemon
    var _this = _possibleConstructorReturn(this, (PokemonMainContent.__proto__ || Object.getPrototypeOf(PokemonMainContent)).call(this, props));

    _this.state = {
      poke1: ['', ''],
      poke2: ['', ''],
      poke3: ['', ''],
      poke4: ['', ''],
      poke5: ['', ''],
      poke6: ['', '']
    };

    //binding the function to here this pokemonMainContent class
    _this.initPoke = _this.initPoke.bind(_this);
    _this.updatePoke = _this.updatePoke.bind(_this);
    return _this;
  }

  //the function takes in both types of the pokemon and updates the state here that the pokemon type has changed
  //it also takes in the pokenumber (where it is on the list) so that I only use one function to update any of the values
  //[pokeNum] means we put the value of pokeNum as the key for the state


  _createClass(PokemonMainContent, [{
    key: 'updatePoke',
    value: function updatePoke(pokeNum, type1, type2) {
      this.setState(_defineProperty({}, pokeNum, [type1, type2]));
    }
    //this function is to initialize the page with the pokemon team we send in

  }, {
    key: 'initPoke',
    value: function initPoke(pokemonTeam) {
      index = 1;
      stateIndex = 'poke';
      //for every pokemon we have in pokemon Team we are going to add it to the team
      for (var pokemonIndex in pokemonTeam) {
        //stateIndex now points at the correct index
        stateIndex += index.toString();
        if (pokeStuff.hasOwnProperty(pokemonTeam[pokemonIndex])) {
          //Getting the types to update the pokemon stuff
          type1 = pokeStuff[pokemonTeam[pokemonIndex]][0]['Type1'];
          type2 = pokeStuff[pokemonTeam[pokemonIndex]][0]['Type2'];
          this.updatePoke(stateIndex, type1, type2);
        }
        //increasing index and making resetting stateIndex
        index += 1;
        stateIndex = 'poke';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      //if there is a team that they have passed in we update accordingly
      if (pokemonTeam.length > 0) {
        console.log('We are entering the function');
        this.initPoke(pokemonTeam);
      }
      //the div is a row that way neither pokemonList or TableType tries to go to the other row. THe row class confines it to current row unless I say otherwise
      return React.createElement(
        'div',
        { 'class': 'row' },
        React.createElement(PokemonList, { onPokemonUpdate: this.updatePoke, pokemonList: pokemonTeam }),
        React.createElement(TableType, { pokeTypeInfo: [this.state.poke1, this.state.poke2, this.state.poke3, this.state.poke4, this.state.poke5, this.state.poke6] })
      );
    } //end of render

  }]);

  return PokemonMainContent;
}(React.Component); //end of pokemonMainContent class

var TableType = function (_React$Component2) {
  _inherits(TableType, _React$Component2);

  function TableType(props) {
    _classCallCheck(this, TableType);

    /* Ok right here if I want to do anything with the props they sent in they I might have it interact with the state*/
    var _this2 = _possibleConstructorReturn(this, (TableType.__proto__ || Object.getPrototypeOf(TableType)).call(this, props));

    _this2.pokemonTypeWeakness = _this2.pokemonTypeWeakness.bind(_this2);
    _this2.pokemonWeakness = _this2.pokemonWeakness.bind(_this2);

    return _this2;
  } //end of constructor for TableType

  //In this function we are going to return the list that has the effectiveness of different moves against this type
  //bug [1,.5,2,1,...] the first item means that bug types are x1 effective vs bug the second one means that dark are .5x effective against but (NOT TRUE)


  _createClass(TableType, [{
    key: 'pokemonTypeWeakness',
    value: function pokemonTypeWeakness(type) {
      switch (type) {
        case "Bug":
          //remember this lilst is the effectiveness of types AGAINST bug type pokemon
          //x2 effective are fire flying and rock
          //.5 effective is fighting grass, ground
          bugList1 = [1, 1, 1, 1, 1, .5, 2, 2, 1, .5, .5, 1, 1, 1, 1, 2, 1, 1];
          return bugList1;
          break; //pretty sure this is never triggered but better to be safe than sorry
        case "Dark":
          darkList1 = [2, .5, 1, 1, 2, 2, 1, 1, .5, 1, 1, 1, 1, 1, 0, 1, 1, 1];
          return darkList1;
          break;
        case "Dragon":
          dragonList1 = [1, 1, 2, .5, 2, 1, .5, 1, 1, .5, 1, 2, 1, 1, 1, 1, 1, .5];
          return dragonList1;
          break;
        case "Electric":
          electricList1 = [1, 1, 1, .5, 1, 1, 1, .5, 1, 1, 2, 1, 1, 1, 1, 1, .5, 1];
          return electricList1;
          break;
        case "Fairy":
          fairyList1 = [.5, .5, 0, 1, 1, .5, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1];
          return fairyList1;
          break;
        case "Fighting":
          fightingList1 = [.5, .5, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, .5, 1, 1];
          return fightingList1;
          break;
        case "Fire":
          fireList1 = [.5, 1, 1, 1, .5, 1, .5, 1, 1, .5, 2, .5, 1, 1, 1, 2, .5, 2];
          return fireList1;
          break;
        case "Flying":
          flyingList1 = [.5, 1, 1, 2, 1, .5, 1, 1, 1, .5, 0, 2, 1, 1, 1, 2, 1, 1];
          return flyingList1;
          break;
        case "Ghost":
          ghostList1 = [.5, 2, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 0, .5, 1, 1, 1, 1];
          return ghostList1;
          break;
        case "Grass":
          grassList1 = [2, 1, 1, .5, 1, 1, 2, 2, 1, .5, .5, 2, 1, 2, 1, 1, 1, .5];
          return grassList1;
          break;
        case "Ground":
          groundList1 = [1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, .5, 1, .5, 1, 2];
          return groundList1;
          break;
        case "Ice":
          iceList1 = [1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, .5, 1, 1, 1, 2, 2, 1];
          return iceList1;
          break;
        case "Normal":
          normalList1 = [1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
          return normalList1;
          break;
        case "Poison":
          poisonList1 = [.5, 1, 1, 1, .5, .5, 1, 1, 1, .5, 2, 1, 1, .5, 2, 1, 1, 1];
          return poisonList1;
          break;
        case "Psychic":
          psychicList1 = [2, 2, 1, 1, 1, .5, 1, 1, 2, 1, 1, 1, 1, 1, .5, 1, 1, 1];
          return psychicList1;
          break;
        case "Rock":
          rockList1 = [1, 1, 1, 1, 1, 2, .5, .5, 1, 2, 2, 1, .5, .5, 1, 1, 2, 2];
          return rockList1;
          break;
        case "Steel":
          steelList1 = [.5, 1, .5, 1, .5, 2, 2, .5, 1, .5, 2, .5, .5, 0, .5, .5, .5, 1];
          return steelList1;
          break;
        case "Water":
          waterList1 = [1, 1, 1, 2, 1, 1, .5, 1, 1, 2, 1, .5, 1, 1, 1, 1, .5, .5];
          return waterList1;
          break;
        //if we do not get a type then we go here which should not impact the other type of the pokemon because the list is 1's
        default:
          //if we are not given a real type we return 1 for all
          return [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
      }
    }

    //Function to determine what are the type things when we pass in the two types of the pokemon

  }, {
    key: 'pokemonWeakness',
    value: function pokemonWeakness(type1, type2) {
      list1 = this.pokemonTypeWeakness(type1);
      list2 = this.pokemonTypeWeakness(type2);

      //if there is no second type then we return list1
      if (list2[0] == -1) {
        return list1;
      }
      //if there is a second type we go through the works and combine the lists
      else {
          //creating the list that will store the combination of lsit1&llist2
          returnList = [];

          //Getting the  length of list 2 in all honesty I know the size maybe putting in a hard value is better than getting it every time...
          length = list2.length;

          //assigning the length of returnList to be the same as the other lists
          returnList.length = length;

          //for loop that iterates for the size of the list and will fill returnList with proper values
          for (i = 0; i < length; ++i) {
            //the value of returnList is list1 * list2 because that is how types work in pokemon
            returnList[i] = list1[i] * list2[i];
          }
          //returning returnList
          return returnList;
        }
    } //end of pokemonWeakness

  }, {
    key: 'render',
    value: function render() {
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
      var allPokemonTypes = this.props.pokeTypeInfo;

      for (var _i = 0; _i < 6; _i++) {
        //getting the type stuff of one pokemon ;)
        type1 = allPokemonTypes[_i][0];
        type2 = allPokemonTypes[_i][1];

        //onePokemon has the type stuff of this singlePokemon
        onePokemon = this.pokemonWeakness(type1, type2);

        //basically if there is no type we don't even push anything to the lists
        if (onePokemon[0] == -1) {
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
      } //end of the for loop

      table = React.createElement(
        'div',
        { 'class': 'col-sm-12 col-lg-6' },
        React.createElement(TableRow, { type: '0' }),
        React.createElement(TableRow, { type: 'Bug', list: bugList }),
        React.createElement(TableRow, { type: 'Dark', list: darkList }),
        React.createElement(TableRow, { type: 'Dragon', list: dragonList }),
        React.createElement(TableRow, { type: 'Electric', list: electricList }),
        React.createElement(TableRow, { type: 'Fairy', list: fairyList }),
        React.createElement(TableRow, { type: 'Fighting', list: fightingList }),
        React.createElement(TableRow, { type: 'Fire', list: fireList }),
        React.createElement(TableRow, { type: 'Flying', list: flyingList }),
        React.createElement(TableRow, { type: 'Ghost', list: ghostList }),
        React.createElement(TableRow, { type: 'Grass', list: grassList }),
        React.createElement(TableRow, { type: 'Ground', list: groundList }),
        React.createElement(TableRow, { type: 'Ice', list: iceList }),
        React.createElement(TableRow, { type: 'Normal', list: normalList }),
        React.createElement(TableRow, { type: 'Poison', list: poisonList }),
        React.createElement(TableRow, { type: 'Psychic', list: psychicList }),
        React.createElement(TableRow, { type: 'Rock', list: rockList }),
        React.createElement(TableRow, { type: 'Steel', list: steelList }),
        React.createElement(TableRow, { type: 'Water', list: waterList })
      );
      return table; /*This is the end of return */
    }
  }]);

  return TableType;
}(React.Component);

var TableRow = function (_React$Component3) {
  _inherits(TableRow, _React$Component3);

  function TableRow(props) {
    _classCallCheck(this, TableRow);

    return _possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).call(this, props));
  }

  _createClass(TableRow, [{
    key: 'render',
    value: function render() {
      var type = this.props.type;
      var returnedRow = void 0;
      //now we have this.props.list they are all named this.props.list
      //so I iterate through the list and send the amount of times i see 0,.25..5.1.2.4 to each of the tablesquares
      if (type != "0") {
        //getting the count of each time one of the numbers I expect to appear appears.
        var zeroCount = 0;
        var oneFourthCount = 0;
        var oneHalfCount = 0;
        var oneCount = 0;
        var twoCount = 0;
        var fourCount = 0;

        //getting the prop in a local variable
        var typeList = this.props.list;

        //this is like a for each loop in python. In all honesty if an interview asked me what the difference between this and a for each loop I wouldn't know what to say!
        //going through each element in typeList which has type effectiveness of that move type versus my pokemons
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = typeList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var number = _step.value;

            if (number == 0) ++zeroCount;else if (number == .25) ++oneFourthCount;else if (number == .5) ++oneHalfCount;else if (number == 1) ++oneCount;else if (number == 2) ++twoCount;else if (number == 4) ++fourCount;
          }
          //Here I am sending all the squares the type of square it is that way when I look at it in react developer tools I know what I am looking at.
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        returnedRow = React.createElement(
          'tr',
          { 'class': 'type', id: this.props.type },
          ' ',
          this.props.type,
          React.createElement(TableSquare, { type: this.props.type, word: 'Zero', total: zeroCount }),
          React.createElement(TableSquare, { type: this.props.type, word: 'Point 25', total: oneFourthCount }),
          React.createElement(TableSquare, { type: this.props.type, word: 'Point 5', total: oneHalfCount }),
          React.createElement(TableSquare, { type: this.props.type, word: 'Integer 1', total: oneCount }),
          React.createElement(TableSquare, { type: this.props.type, word: 'Integer 2', total: twoCount }),
          React.createElement(TableSquare, { type: this.props.type, word: 'Integer 4', total: fourCount })
        );
      } else {
        returnedRow = React.createElement(
          'tr',
          { id: 'RowWeakness' },
          ' Strength of Hit',
          React.createElement(
            'td',
            { 'class': 'effectivenessSquare text-center' },
            ' 0x '
          ),
          React.createElement(
            'td',
            { 'class': 'effectivenessSquare text-center' },
            ' 0.25x '
          ),
          React.createElement(
            'td',
            { 'class': 'effectivenessSquare text-center' },
            ' 0.5x '
          ),
          React.createElement(
            'td',
            { 'class': 'effectivenessSquare text-center' },
            ' 1x '
          ),
          React.createElement(
            'td',
            { 'class': 'effectivenessSquare text-center' },
            ' 2x '
          ),
          React.createElement(
            'td',
            { 'class': 'effectivenessSquare text-center' },
            ' 4x '
          )
        );
      }
      return returnedRow;
    }
  }]);

  return TableRow;
}(React.Component);

//class for each of my tablesquares


var TableSquare = function (_React$Component4) {
  _inherits(TableSquare, _React$Component4);

  function TableSquare(props) {
    _classCallCheck(this, TableSquare);

    return _possibleConstructorReturn(this, (TableSquare.__proto__ || Object.getPrototypeOf(TableSquare)).call(this, props));
  }

  _createClass(TableSquare, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'td',
        { 'class': 'square' },
        ' ',
        this.props.total,
        ' '
      );
    }
  }]);

  return TableSquare;
}(React.Component);

var PokemonList = function (_React$Component5) {
  _inherits(PokemonList, _React$Component5);

  function PokemonList(props) {
    _classCallCheck(this, PokemonList);

    var _this5 = _possibleConstructorReturn(this, (PokemonList.__proto__ || Object.getPrototypeOf(PokemonList)).call(this, props));

    _this5.updatePokeTeam = _this5.updatePokeTeam.bind(_this5);
    _this5.changeText = _this5.changeText.bind(_this5);
    _this5.state = {
      //the format is [name type1 type2] for each poekmon in pokemon team
      pokemonTeam: [['', "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]],
      saveTeamFormat: "{{url_for('.saveTeam',team_name='' )}}",
      updateTeamFormat: "{{url_for('.updateTeam',team_name=teamName )}}",
      saveTeamURL: '',
      newPokeTeamName: ''
      //this is the pokemon team we got from the user if we got one
    };pokemonListTeam = _this5.props.pokemonList;

    index = 0;
    //for every pokemon we have in pokemon Team we are going to add it to the team
    for (var pokemonIndex in pokemonTeam) {
      //stateIndex now points at the correct index
      pokeName = pokemonTeam[pokemonIndex];
      if (pokeStuff.hasOwnProperty(pokeName)) {
        //Getting the types to update the pokemon stuff
        type1 = pokeStuff[pokeName][0]['Type1'];
        type2 = pokeStuff[pokeName][0]['Type2'];
        _this5.updatePokeTeam(pokeName, type1, type2, index);
      }
      //increasing index and making resetting stateIndex
      index += 1;
    }

    return _this5;
  }

  _createClass(PokemonList, [{
    key: 'updatePokeTeam',
    value: function updatePokeTeam(name, type1, type2, index) {
      pokemonTeamThing = this.state.pokemonTeam;
      pokemonTeamThing[index][0] = name;
      pokemonTeamThing[index][1] = type1;
      pokemonTeamThing[index][2] = type2;
      this.setState({
        pokemonTeam: pokemonTeamThing
      });
    }
  }, {
    key: 'changeText',
    value: function changeText(event) {
      //we will pass in the name and use it to change the value of the text thing
      this.setState(_defineProperty({}, event.target.name, event.target.value));
      urlNameFormat = this.state.saveTeamFormat;
      urlNameFormat = urlNameFormat + event.target.value;
      this.setState({ saveTeamURL: urlNameFormat });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      //List of all the pokemon we are going to have in the team
      pokemonTeam = this.state.pokemonTeam;

      //Here we are creating a pokemon tag for every pokemon in our pokemon team list
      //every pokemon is getting a function that changes this parents (their grandparents) state
      listItems = pokemonTeam.map(function (pokemon, index) {
        increasedIndex = index + 1;
        return React.createElement(PokemonCard, { index: index, newid: 'addPokemon' + increasedIndex, name: pokemon[0], type1: pokemon[1], type2: pokemon[2], stateNum: "poke" + increasedIndex, singlePokeUpdate: _this6.props.onPokemonUpdate, pokeTeamUpdate: _this6.updatePokeTeam });
      });

      //Only showing the button when we are logged in
      var form = React.createElement(
        'div',
        null,
        ' '
      );
      if (login) {
        var _React$createElement;

        input = React.createElement(
          'span',
          null,
          React.createElement('input', { hidden: true, name: 'poke1', id: 'poke1', type: 'text', value: this.state.pokemonTeam[0][0] }),
          React.createElement('input', { hidden: true, name: 'poke2', id: 'poke2', type: 'text', value: this.state.pokemonTeam[1][0] }),
          React.createElement('input', { hidden: true, name: 'poke3', id: 'poke3', type: 'text', value: this.state.pokemonTeam[2][0] }),
          React.createElement('input', { hidden: true, name: 'poke4', id: 'poke4', type: 'text', value: this.state.pokemonTeam[3][0] }),
          React.createElement('input', { hidden: true, name: 'poke5', id: 'poke5', type: 'text', value: this.state.pokemonTeam[4][0] }),
          React.createElement('input', { hidden: true, name: 'poke6', id: 'poke6', type: 'text', value: this.state.pokemonTeam[5][0] })
        );
        //I am going to need to make this a form and then I am going to have to
        //send this stuff somewhere to save the information. A flask location that ultimately takes us to the same place we are now
        newTeamForm = React.createElement(
          'span',
          null,
          React.createElement(
            'form',
            { action: this.state.saveTeamURL, method: 'POST' },
            input,
            React.createElement('input', { name: 'newPokeTeamName', id: 'newPokeTeamName', type: 'text', value: this.state.newPokeTeamName, onChange: this.changeText, placeholder: 'Enter new team name' }),
            React.createElement('input', { type: 'submit', 'class': 'btn bg-primary', value: 'Create New Team', name: 'submit' })
          )
        );
        updateTeamForm = React.createElement(
          'div',
          null,
          React.createElement(
            'form',
            { action: this.state.updateTeamFormat, method: 'POST' },
            input,
            React.createElement('input', (_React$createElement = { hidden: true }, _defineProperty(_React$createElement, 'hidden', true), _defineProperty(_React$createElement, 'name', 'updatingTeam'), _defineProperty(_React$createElement, 'id', 'updatingTeam'), _defineProperty(_React$createElement, 'type', 'text'), _defineProperty(_React$createElement, 'value', '{{teamName}}'), _React$createElement)),
            React.createElement('input', { type: 'submit', 'class': 'btn bg-primary', value: 'Update This Team', name: 'submit' })
          )
        );
      }
      return React.createElement(
        'div',
        { 'class': 'col-sm-12 col-lg-6' },
        listItems,
        newTeamForm,
        updateTeamForm
      );
    }
  }]);

  return PokemonList;
}(React.Component); //This is the end of the pokemonlist class

var PokemonCard = function (_React$Component6) {
  _inherits(PokemonCard, _React$Component6);

  function PokemonCard(props) {
    _classCallCheck(this, PokemonCard);

    //binding the function to this place
    var _this7 = _possibleConstructorReturn(this, (PokemonCard.__proto__ || Object.getPrototypeOf(PokemonCard)).call(this, props));

    _this7.addPokemonFunc = _this7.addPokemonFunc.bind(_this7);
    _this7.removePokemonFunc = _this7.removePokemonFunc.bind(_this7);
    _this7.changeText = _this7.changeText.bind(_this7);

    //basically if we got a name from somewhere then we will change our state accordingly
    name = _this7.props.name;
    if (name.length > 0) {
      console.log('true');
      _this7.state = {
        isActive: true,
        pokeName: name
      };
    } //end of if
    else {
        _this7.state = {
          isActive: false,
          pokeName: ''
        };
      }
    return _this7;
  } //end of the constructoerr

  //creating a function to change the state of a pokemon  to true when we have added a pokemon


  _createClass(PokemonCard, [{
    key: 'addPokemonFunc',
    value: function addPokemonFunc() {
      //pokeStuff <____ -- that has the pokemon names with the types and stuff too nice

      //I will first check if the pokemonName is indeed a pokemon name
      //then if it is a pokemon name then I will do the changes
      //and if it is not then I might do nothing or put a message
      if (pokeStuff.hasOwnProperty(this.state.pokeName)) {
        this.setState({ isActive: true });
        //not just that but I need to update the grandparents state to tell them that I must do this
        //updateing the grandparents state with the new pokemon type we have every time we add a pokemon
        type1 = pokeStuff[this.state.pokeName][0]['Type1'];
        type2 = pokeStuff[this.state.pokeName][0]['Type2'];
        this.props.singlePokeUpdate(this.props.stateNum, type1, type2);
        this.props.pokeTeamUpdate(this.state.pokeName, type1, type2, this.props.index);
      } else {
        console.log('Not a valid pokemon name');
      }
    }

    //creating a function to change the state of a pokemon to false when we choose to remove a pokemon. I typed out this whole comment again even though it is almost identical to the other one.

  }, {
    key: 'removePokemonFunc',
    value: function removePokemonFunc() {
      this.setState({ isActive: false });
      //every time we remove a pokemon we basically remove it by not giving it a type
      this.props.singlePokeUpdate(this.props.stateNum, '', '');
    }
  }, {
    key: 'changeText',
    value: function changeText(event) {
      //we will pass in the name and use it to change the value of the text thing
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: 'render',
    value: function render() {

      //Here we should check if this card is active. WHen the card is active we show the pokemon and when it is not we show just add pokemon button
      active = this.state.isActive;
      if (active) {
        var _type = this.props.type2;
        //Just putting nothing important in here but i have ot initialize it somehow you know what I am saying !?!
        secondTypeIcon = React.createElement(
          'p',
          null,
          ' hi'
        );
        //If there is a type for the second type then we should make an icon that displays that .
        if (_type != "") {
          secondTypeIcon = React.createElement(
            'span',
            { id: this.props.type2, 'class': ' border rounded border-dark typeCard' },
            this.props.type2
          );
        } else {
          //basically it is nothing
          secondTypeIcon = React.createElement(
            'span',
            null,
            ' '
          );
        }
        //Returing the general outline of the card we will have
        return React.createElement(
          'div',
          { 'class': 'pokeCard card border-info' },
          React.createElement(
            'div',
            { 'class': 'card-header' },
            ' ',
            this.props.name,
            React.createElement(
              'span',
              { 'class': 'ml-auto' },
              React.createElement(
                'span',
                { id: this.props.type1, 'class': ' border rounded border-dark typeCard' },
                this.props.type1
              ),
              secondTypeIcon
            )
          ),
          React.createElement(
            'div',
            { 'class': 'card-body' },
            React.createElement(
              'button',
              { type: 'button', 'class': 'btn btn-danger btn-sm ', onClick: this.removePokemonFunc },
              ' Remove Pokemon '
            ),
            React.createElement(
              'button',
              { type: 'button', 'class': 'btn btn-primary btn-sm' },
              ' Replace Pokemon '
            )
          )
        );
      } //end of the case where it is active
      //what we should do if the card is not active. AKA there is no pokemon showing
      else {
          //Returing the general outline of the card we will have
          return React.createElement(
            'div',
            { 'class': 'pokeCard card border-info' },
            React.createElement(
              'div',
              { 'class': 'card-body' },
              React.createElement(
                'div',
                null,
                React.createElement(
                  'label',
                  { 'for': this.props.newid },
                  ' Add Pokemon '
                ),
                React.createElement('input', { name: 'pokeName', id: this.props.newid, type: 'text', 'class': '', value: this.state.pokeName, onChange: this.changeText, placeholder: 'Type Pokemon Name!' })
              ),
              React.createElement(
                'button',
                { type: 'button', 'class': 'btn btn-danger btn-sm', onClick: this.addPokemonFunc },
                ' Add Pokemon '
              )
            )
          ); //end of the return
        } //end of the else statement
    } //end of render function

  }]);

  return PokemonCard;
}(React.Component);

ReactDOM.render(React.createElement(PokemonMainContent, null), document.getElementById('pokemons'));