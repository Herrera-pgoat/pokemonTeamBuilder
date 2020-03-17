var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var PokemonList = function (_React$Component) {
  _inherits(PokemonList, _React$Component);

  function PokemonList(props) {
    _classCallCheck(this, PokemonList);

    return _possibleConstructorReturn(this, (PokemonList.__proto__ || Object.getPrototypeOf(PokemonList)).call(this, props));
  }

  _createClass(PokemonList, [{
    key: "render",
    value: function render() {
      //List of all the pokemon we are going to have in the team
      pokemonTeam = [['Tyranitar', "Dark", "Rock"], ["Garchomp", "Dragon", "Ground"], ["Greninja", "Water", "Dark"], ["Charizard", "Fire", "Flying"], ["Alakazam", "Psychic", ""], ["Infernape", "Fire", "Fighting"]];

      //Here we are creating a pokemon tag for every pokemon in our pokemon team list
      listItems = pokemonTeam.map(function (pokemon) {
        return React.createElement(PokemonCard, { name: pokemon[0], type1: pokemon[1], type2: pokemon[2] });
      });

      return React.createElement(
        "span",
        null,
        listItems
      );
    }
  }]);

  return PokemonList;
}(React.Component); //This is the end of the pokemonlist file

var PokemonCard = function (_React$Component2) {
  _inherits(PokemonCard, _React$Component2);

  function PokemonCard(props) {
    _classCallCheck(this, PokemonCard);

    return _possibleConstructorReturn(this, (PokemonCard.__proto__ || Object.getPrototypeOf(PokemonCard)).call(this, props));
  }

  _createClass(PokemonCard, [{
    key: "render",
    value: function render() {
      /* Hither is where I will make the card look nice for the pokemons
      card
      has name , types, button to remove itself*/
      var type2 = this.props.type2;
      //Just putting nothing important in here but i have ot initialize it somehow you know what I am saying !?!
      secondTypeIcon = React.createElement(
        "p",
        null,
        " hi"
      );
      //If there is a type for the second type then we should make an icon that displays that .
      if (type2 != "") {
        secondTypeIcon = React.createElement(
          "span",
          { id: this.props.type2, "class": " border rounded border-dark typeCard" },
          this.props.type2
        );
      } else {
        //basically it is nothing
        secondTypeIcon = React.createElement(
          "span",
          null,
          " "
        );
      }
      //Returing the general outline of the card we will have
      return React.createElement(
        "div",
        { "class": "card border-info" },
        React.createElement(
          "div",
          { "class": "card-header" },
          " ",
          this.props.name,
          React.createElement(
            "span",
            { "class": "ml-auto" },
            React.createElement(
              "span",
              { id: this.props.type1, "class": " border rounded border-dark typeCard" },
              this.props.type1
            ),
            secondTypeIcon
          )
        ),
        React.createElement(
          "div",
          { "class": "card-body" },
          React.createElement(
            "button",
            { type: "button", "class": "btn btn-danger btn-sm " },
            " Remove Pokemon "
          ),
          React.createElement(
            "button",
            { type: "button", "class": "btn btn-primary btn-sm" },
            " Replace Pokemon "
          )
        )
      );
    }
  }]);

  return PokemonCard;
}(React.Component);

ReactDOM.render(React.createElement(PokemonList, null), document.getElementById('pokemons'));