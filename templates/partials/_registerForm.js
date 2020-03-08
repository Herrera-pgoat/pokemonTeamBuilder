'use strict';

function RegisterForm(props) {
  var registerForm =
  //This div tag all the way at the top contains the cord and tells it to be 12 columns(whole screen) on tiny screens and 5 on large screens
  React.createElement(
    "div",
    { id: "createAccountContent", "class": "container col-12 col-lg-5", style: { marginTop: 50 } },
    React.createElement(
      "div",
      { "class": "card border-dark text-center" },
      React.createElement(
        "h4",
        { "class": "card-header ", style: { backgroundColor: '#30a7d7' } },
        " Create Account "
      ),
      React.createElement(
        "div",
        { "class": "card-body " },
        React.createElement(
          "form",
          { action: "{{ url_for('.register') }}", method: "POST" },
          React.createElement(
            "div",
            { "class": "form-group" },
            React.createElement(
              "label",
              { "for": "usernameForm" },
              " Username "
            ),
            React.createElement("input", { type: "text", "class": "form-control", value: "", name: "usernameForm", id: "usernameForm", placeholder: "Enter Username", required: true })
          ),
          React.createElement(
            "div",
            { "class": "form-group" },
            React.createElement(
              "label",
              { "for": "passwordForm" },
              "Password "
            ),
            React.createElement("input", { type: "password", "class": "form-control", value: "", name: "passwordForm", id: "passwordForm", placeholder: "Enter Password", required: true })
          ),
          React.createElement(
            "div",
            { "class": "form-group" },
            React.createElement(
              "label",
              { "for": "passwordConfirmForm" },
              "Confirm Password "
            ),
            React.createElement("input", { type: "password", "class": "form-control", value: "", name: "passwordConfirmForm", id: "passwordConfirmForm", placeholder: "Confirm Password", required: true })
          ),
          React.createElement("input", { type: "submit", "class": "btn", value: "Create Account", name: "submit", style: { backgroundColor: '#30a7d7' } })
        )
      )
    )
  );
  return registerForm;
}
ReactDOM.render(React.createElement(RegisterForm, null), document.getElementById('registerForm'));