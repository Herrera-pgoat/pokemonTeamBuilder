'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegisterForm = function (_React$Component) {
  _inherits(RegisterForm, _React$Component);

  function RegisterForm(props) {
    _classCallCheck(this, RegisterForm);

    var _this = _possibleConstructorReturn(this, (RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).call(this, props));

    _this.state = {
      usernameForm: '',
      passwordForm: '',
      passwordConfirmForm: '',
      formActionRedirect: "{{url_for('.register')}}"
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  } //end of the constructor

  _createClass(RegisterForm, [{
    key: 'handleChange',
    value: function handleChange(event) {
      //we will pass in the name and use it to change the value of the text thing
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: 'render',
    value: function render() {
      //This div tag all the way at the top contains the cord and tells it to be 12 columns(whole screen) on tiny screens and 5 on large screens
      return React.createElement(
        'div',
        { id: 'createAccountContent', 'class': 'container col-12 col-lg-5', style: { marginTop: 50 } },
        React.createElement(
          'div',
          { 'class': 'card border-dark text-center' },
          React.createElement(
            'h4',
            { 'class': 'card-header ', style: { backgroundColor: '#30a7d7' } },
            ' Create Account '
          ),
          React.createElement(
            'div',
            { 'class': 'card-body' },
            React.createElement(
              'form',
              { action: this.state.formActionRedirect, method: 'POST' },
              React.createElement(
                'div',
                { 'class': 'form-group' },
                React.createElement(
                  'label',
                  { 'for': 'usernameForm' },
                  ' Username '
                ),
                React.createElement('input', { type: 'text', 'class': 'form-control', value: this.state.nameText, onChange: this.handleChange, name: 'usernameForm', id: 'usernameForm', placeholder: 'Enter Username', required: true })
              ),
              React.createElement(
                'div',
                { 'class': 'form-group' },
                React.createElement(
                  'label',
                  { 'for': 'passwordForm' },
                  'Password '
                ),
                React.createElement('input', { type: 'password', 'class': 'form-control', value: this.state.passwordForm, onChange: this.handleChange, name: 'passwordForm', id: 'passwordForm', placeholder: 'Enter Password', required: true })
              ),
              React.createElement(
                'div',
                { 'class': 'form-group' },
                React.createElement(
                  'label',
                  { 'for': 'passwordConfirmForm' },
                  'Confirm Password '
                ),
                React.createElement('input', { type: 'password', 'class': 'form-control', value: this.state.passwordConfirmForm, onChange: this.handleChange, name: 'passwordConfirmForm', id: 'passwordConfirmForm', placeholder: 'Confirm Password', required: true })
              ),
              React.createElement('input', { type: 'submit', 'class': 'btn', value: 'Create Account', name: 'submit', style: { backgroundColor: '#30a7d7' } })
            )
          )
        )
      );
    } //end of render function

  }]);

  return RegisterForm;
}(React.Component); //end of RegisterForm class

ReactDOM.render(React.createElement(RegisterForm, null), document.getElementById('registerForm'));