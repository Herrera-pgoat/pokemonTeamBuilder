'use strict';
//This is goint o be a nav bar so I am goint to call this class navba  <---- I might make this a function laterr

function NavbarPoke(props) {
  //this variable has the whole navbar !
  const navbar = (
    //In here I will have a navbar one day
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
          <li class="nav-item">
            <a class="nav-link" href="{{ url_for('.register' ) }}"> Register </a>
          </li>
          <li class="nav-item">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Login
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#"> Text box here </a>
              <a class="dropdown-item" href="#"> pw textbox here </a>
              <a class="dropdown-item" href="#"> loginbuttonHere </a>
            </div>
          </li>
        </ul>
      </div>
    </nav> //this is the end of the  nav tag
  );//end of navbar variable

//returning the navbar var we made above to whatever called us
  return navbar;
}//end of navbarPoke

//getting the divtag with id navbarPoke and putting it in navContainer
let navContainer = document.getElementById('navbarPoke');
//putting the NavbarPoke in the navcontainer
//<NavbarPoke /> calls the function and then returns navbar and loads that into the navConatiner space
ReactDOM.render(<NavbarPoke />, navContainer);
