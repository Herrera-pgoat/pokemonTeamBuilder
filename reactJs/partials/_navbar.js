'use strict';
//This is goint o be a nav bar so I am goint to call this class navba  <---- I might make this a function laterr
class NavbarPoke extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      passwordLogin:"",
      userLogin:"",
      currentURL:'',
      formActionRedirect: "{{url_for('.mainPage')}}",
    };
    //I don't know how but I will eventually get current url to contain the currentURL
  }

  handleChange(event){
    this.setState({[event.target.name]:event.target.value});
  }

  render(){
    let navbarElement = 2;
    const logIn = this.props.logIn;
    if(logIn == 'True'){
      navbarElement =
      (
        <span class="row ml-2">
          <li class="nav-item">
          <a class="nav-link" href="#"> Hi {this.props.username}  </a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="{{ url_for('.logout') }}">logout {this.props.username}  </a>
         </li>
      </span>
    );
    }
    else{
      navbarElement =
      (
        <span class="row ml-2">
          <li class="nav-item">
            <a class="nav-link" href="{{ url_for('.register' ) }}"> Register </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Login
            </a>
            <div class="dropdown-menu loginThing" aria-labelledby="navbarDropdownMenuLink">
              <form action={this.state.formActionRedirect} method="POST" >
                <label for="userLogin"> Username: </label>
                <input class="form-control" type="text" id="userLogin" name="userLogin" value={this.state.userLogin} onChange={this.handleChange} placeholder="Enter Username!" required/>
                <label for="passwordLogin"> Password: </label>
                <input class="form-control" type="password" id="passwordLogin" name="passwordLogin" value={this.state.passwordLogin} onChange={this.handleChange} placeholder="Enter Password!" required/>
                <input type="submit" class="btn" value="Login" name="submit" style={{backgroundColor:'#30a7d7',marginTop:10}}  />
              </form>
            </div>
          </li>
      </span>
      );
    }

    return(
      <nav class="navbar navbar-expand-lg navbar-light"  style={{marginBottom:10}}>
        <a class="navbar-brand" href="{{url_for('.mainPage')}}"> Pokemon Team Builder</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropDown" aria-controls="navbarNavDropDown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"> </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropDown">
          <ul class="navbar-nav ">
            <li class="nav-item ">
              <a class="nav-link" href="{{ url_for('.aboutPage') }}" > About </a>
            </li>
            {navbarElement}
          </ul>
        </div>
      </nav>
    );
    //this is the end of the return
  }
}

//getting the divtag with id navbarPoke and putting it in navContainer
// let navContainer = document.getElementById('navbarPoke');
// //putting the NavbarPoke in the navcontainer
// //<NavbarPoke /> calls the function and then returns navbar and loads that into the navConatiner space
// ReactDOM.render(<NavbarPoke />, navContainer);
