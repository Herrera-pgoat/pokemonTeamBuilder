var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//So first thought is to have the pokemonList contain a list of the pokemoncards and we will
//increase or decrease the number of cards through the button in the pokemoncard ??
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

    var _this2 = _possibleConstructorReturn(this, (PokemonCard.__proto__ || Object.getPrototypeOf(PokemonCard)).call(this, props));

    _this2.state = { isActive: true };
    //binding the function to this place
    _this2.addPokemonFunc = _this2.addPokemonFunc.bind(_this2);
    _this2.removePokemonFunc = _this2.removePokemonFunc.bind(_this2);

    return _this2;
  }

  //creating a function to change the state of a pokemon  to true when we have added a pokemon


  _createClass(PokemonCard, [{
    key: "addPokemonFunc",
    value: function addPokemonFunc() {
      this.setState({ isActive: true });
    }

    //creating a function to change the state of a pokemon to false when we choose to remove a pokemon. I typed out this whole comment again even though it is almost identical to the other one.

  }, {
    key: "removePokemonFunc",
    value: function removePokemonFunc() {
      this.setState({ isActive: false });
    }
  }, {
    key: "render",
    value: function render() {
      /* Hither is where I will make the card look nice for the pokemons
      card
      has name , types, button to remove itself*/
      //Here we should check if this card is active. WHen the card is active we show the pokemon and when it is not we show just add pokemon button
      active = this.state.isActive;
      if (active) {
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
          { "class": "pokeCard card border-info" },
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
              { type: "button", "class": "btn btn-danger btn-sm ", onClick: this.removePokemonFunc },
              " Remove Pokemon "
            ),
            React.createElement(
              "button",
              { type: "button", "class": "btn btn-primary btn-sm" },
              " Replace Pokemon "
            )
          )
        );
      } //end of the case where it is active
      //what we should do if the card is not active. AKA there is no pokemon showing
      else {
          //Returing the general outline of the card we will have
          return React.createElement(
            "div",
            { "class": "pokeCard card border-info" },
            React.createElement(
              "div",
              { "class": "card-body" },
              React.createElement(
                "div",
                null,
                React.createElement(
                  "label",
                  { "for": "addPokemon" },
                  " Add Pokemon "
                ),
                React.createElement("input", { id: "addPokemon", type: "text", "class": "", placeholder: "Type Pokemon Name!" })
              ),
              React.createElement(
                "button",
                { type: "button", "class": "btn btn-danger btn-sm", onClick: this.addPokemonFunc },
                " Add Pokemon "
              )
            )
          ); //end of the return
        } //end of the else statement
    } //end of render function

  }]);

  return PokemonCard;
}(React.Component);

ReactDOM.render(React.createElement(PokemonList, null), document.getElementById('pokemons'));