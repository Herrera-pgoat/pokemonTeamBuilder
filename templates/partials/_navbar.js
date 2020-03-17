'use strict';
//This is goint o be a nav bar so I am goint to call this class navba  <---- I might make this a function laterr

function NavbarPoke(props) {
  //this variable has the whole navbar !
  var navbar =
  //In here I will have a navbar one day
  React.createElement(
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
          { "class": "nav-item" },
          React.createElement(
            "a",
            { "class": "nav-link dropdown-toggle", href: "#", id: "navbarDropdownMenuLink", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
            "Login"
          ),
          React.createElement(
            "div",
            { "class": "dropdown-menu", "aria-labelledby": "navbarDropdownMenuLink" },
            React.createElement(
              "a",
              { "class": "dropdown-item", href: "#" },
              " Text box here "
            ),
            React.createElement(
              "a",
              { "class": "dropdown-item", href: "#" },
              " pw textbox here "
            ),
            React.createElement(
              "a",
              { "class": "dropdown-item", href: "#" },
              " loginbuttonHere "
            )
          )
        )
      )
    )
  ) //this is the end of the  nav tag
  ; //end of navbar variable

  //returning the navbar var we made above to whatever called us
  return navbar;
} //end of navbarPoke

//getting the divtag with id navbarPoke and putting it in navContainer
var navContainer = document.getElementById('navbarPoke');
//putting the NavbarPoke in the navcontainer
//<NavbarPoke /> calls the function and then returns navbar and loads that into the navConatiner space
ReactDOM.render(React.createElement(NavbarPoke, null), navContainer);