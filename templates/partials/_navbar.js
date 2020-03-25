'use strict';
//This is goint o be a nav bar so I am goint to call this class navba  <---- I might make this a function laterr

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavbarPoke = function (_React$Component) {
  _inherits(NavbarPoke, _React$Component);

  function NavbarPoke(props) {
    _classCallCheck(this, NavbarPoke);

    var _this = _possibleConstructorReturn(this, (NavbarPoke.__proto__ || Object.getPrototypeOf(NavbarPoke)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.state = {
      passwordLogin: "",
      userLogin: "",
      currentURL: '',
      formActionRedirect: "{{url_for('.mainPage')}}"
    };
    //I don't know how but I will eventually get current url to contain the currentURL
    return _this;
  }

  _createClass(NavbarPoke, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      var navbarElement = 2;
      var logIn = this.props.logIn;
      if (logIn == 'True') {
        navbarElement = React.createElement(
          "span",
          { "class": "row ml-2" },
          React.createElement(
            "li",
            { "class": "nav-item" },
            React.createElement(
              "a",
              { "class": "nav-link", href: "#" },
              " Hi ",
              this.props.username,
              "  "
            )
          ),
          React.createElement(
            "li",
            { "class": "nav-item" },
            React.createElement(
              "a",
              { "class": "nav-link", href: "{{ url_for('.logout') }}" },
              "logout ",
              this.props.username,
              "  "
            )
          )
        );
      } else {
        navbarElement = React.createElement(
          "span",
          { "class": "row ml-2" },
          React.createElement(
            "li",
            { "class": "nav-item" },
            React.createElement(
              "a",
              { "class": "nav-link", href: "{{ url_for('.register' ) }}" },
              " Register "
            )
          ),
          React.createElement(
            "li",
            { "class": "nav-item dropdown" },
            React.createElement(
              "a",
              { "class": "nav-link dropdown-toggle", href: "#", id: "navbarDropdownMenuLink", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
              "Login"
            ),
            React.createElement(
              "div",
              { "class": "dropdown-menu loginThing", "aria-labelledby": "navbarDropdownMenuLink" },
              React.createElement(
                "form",
                { action: this.state.formActionRedirect, method: "POST" },
                React.createElement(
                  "label",
                  { "for": "userLogin" },
                  " Username: "
                ),
                React.createElement("input", { "class": "form-control", type: "text", id: "userLogin", name: "userLogin", value: this.state.userLogin, onChange: this.handleChange, placeholder: "Enter Username!", required: true }),
                React.createElement(
                  "label",
                  { "for": "passwordLogin" },
                  " Password: "
                ),
                React.createElement("input", { "class": "form-control", type: "password", id: "passwordLogin", name: "passwordLogin", value: this.state.passwordLogin, onChange: this.handleChange, placeholder: "Enter Password!", required: true }),
                React.createElement("input", { type: "submit", "class": "btn", value: "Login", name: "submit", style: { backgroundColor: '#30a7d7', marginTop: 10 } })
              )
            )
          )
        );
      }

      return React.createElement(
        "nav",
        { "class": "navbar navbar-expand-lg navbar-light", style: { marginBottom: 10 } },
        React.createElement(
          "a",
          { "class": "navbar-brand", href: "{{url_for('.mainPage')}}" },
          " Pokemon Team Builder"
        ),
        React.createElement(
          "button",
          { "class": "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarNavDropDown", "aria-controls": "navbarNavDropDown", "aria-expanded": "false", "aria-label": "Toggle navigation" },
          React.createElement(
            "span",
            { "class": "navbar-toggler-icon" },
            " "
          )
        ),
        React.createElement(
          "div",
          { "class": "collapse navbar-collapse", id: "navbarNavDropDown" },
          React.createElement(
            "ul",
            { "class": "navbar-nav " },
            React.createElement(
              "li",
              { "class": "nav-item " },
              React.createElement(
                "a",
                { "class": "nav-link", href: "{{ url_for('.aboutPage') }}" },
                " About "
              )
            ),
            navbarElement
          )
        )
      );
      //this is the end of the return
    }
  }]);

  return NavbarPoke;
}(React.Component);

//getting the divtag with id navbarPoke and putting it in navContainer
// let navContainer = document.getElementById('navbarPoke');
// //putting the NavbarPoke in the navcontainer
// //<NavbarPoke /> calls the function and then returns navbar and loads that into the navConatiner space
// ReactDOM.render(<NavbarPoke />, navContainer);