var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//https://clips.twitch.tv/AverageGeniusMinkMingLee leffen likes toradora
var TableType = function (_React$Component) {
  _inherits(TableType, _React$Component);

  function TableType(props) {
    _classCallCheck(this, TableType);

    return _possibleConstructorReturn(this, (TableType.__proto__ || Object.getPrototypeOf(TableType)).call(this, props));
    /* Ok right here if I want to do anything with the props they sent in they I might have it interact with the state*/
  }

  _createClass(TableType, [{
    key: "render",
    value: function render() {
      table = React.createElement(
        "div",
        null,
        React.createElement(TableRow, { type: "0" }),
        React.createElement(TableRow, { type: "Bug" }),
        React.createElement(TableRow, { type: "Dark" }),
        React.createElement(TableRow, { type: "Dragon" }),
        React.createElement(TableRow, { type: "Electric" }),
        React.createElement(TableRow, { type: "Fairy" }),
        React.createElement(TableRow, { type: "Fighting" }),
        React.createElement(TableRow, { type: "Fire" }),
        React.createElement(TableRow, { type: "Flying" }),
        React.createElement(TableRow, { type: "Ghost" }),
        React.createElement(TableRow, { type: "Grass" }),
        React.createElement(TableRow, { type: "Ground" }),
        React.createElement(TableRow, { type: "Ice" }),
        React.createElement(TableRow, { type: "Normal" }),
        React.createElement(TableRow, { type: "Poison" }),
        React.createElement(TableRow, { type: "Psychic" }),
        React.createElement(TableRow, { type: "Rock" }),
        React.createElement(TableRow, { type: "Steel" }),
        React.createElement(TableRow, { type: "Water" })
      );
      return table; /*This is the end of return */
    }
  }]);

  return TableType;
}(React.Component);

var TableRow = function (_React$Component2) {
  _inherits(TableRow, _React$Component2);

  function TableRow(props) {
    _classCallCheck(this, TableRow);

    return _possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).call(this, props));
  }

  _createClass(TableRow, [{
    key: "render",
    value: function render() {
      var type = this.props.type;
      var returnedRow = void 0;
      if (type != "0") {
        returnedRow = React.createElement(
          "tr",
          { "class": "type", id: this.props.type },
          " ",
          this.props.type,
          React.createElement(TableSquare, { word: "Zero " }),
          React.createElement(TableSquare, { word: "Point 25" }),
          React.createElement(TableSquare, { word: "Point 5" }),
          React.createElement(TableSquare, { word: "Integer 1" }),
          React.createElement(TableSquare, { word: "Integer 2" }),
          React.createElement(TableSquare, { word: "Integer 4" })
        );
      } else {
        returnedRow = React.createElement(
          "tr",
          { id: "RowWeakness" },
          " Strength of Hit",
          React.createElement(
            "td",
            null,
            " 0x "
          ),
          React.createElement(
            "td",
            null,
            " 0.25x "
          ),
          React.createElement(
            "td",
            null,
            " 0.5x "
          ),
          React.createElement(
            "td",
            null,
            " 1x "
          ),
          React.createElement(
            "td",
            null,
            " 2x "
          ),
          React.createElement(
            "td",
            null,
            " 4x "
          )
        );
      }
      return returnedRow;
    }
  }]);

  return TableRow;
}(React.Component);

var TableSquare = function (_React$Component3) {
  _inherits(TableSquare, _React$Component3);

  function TableSquare(props) {
    _classCallCheck(this, TableSquare);

    var _this3 = _possibleConstructorReturn(this, (TableSquare.__proto__ || Object.getPrototypeOf(TableSquare)).call(this, props));

    _this3.state = { num: 0 };
    return _this3;
  }

  _createClass(TableSquare, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "td",
        { "class": "square" },
        " ",
        this.state.num,
        " ",
        this.props.word,
        " "
      );
    }
  }]);

  return TableSquare;
}(React.Component);

ReactDOM.render(React.createElement(TableType, null), document.getElementById('table'));