'use strict';

class RegisterForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        usernameForm:'',
        passwordForm: '',
        passwordConfirmForm: '',
        formActionRedirect: "{{url_for('.register')}}" ,
      };
      this.handleChange = this.handleChange.bind(this);
    }//end of the constructor

    handleChange(event){
      //we will pass in the name and use it to change the value of the text thing
      this.setState({[event.target.name]:event.target.value});
    }
    render(){
      //This div tag all the way at the top contains the cord and tells it to be 12 columns(whole screen) on tiny screens and 5 on large screens
      return(
        	<div id="createAccountContent" class="container col-12 col-lg-5" style={{ marginTop:50 }}>
          {/*		<!-- This div tag tells us we want a card and that the border will be black and the text is going to be centered-->*/}
        		<div class="card border-dark text-center">
            {/*			<!--This colors the header of the card blue and tells us this is the header of the card. IT says Create Account --> */}
        	  	<h4 class="card-header " style={{ backgroundColor:'#30a7d7' }} > Create Account </h4>
              {/* 			<!--In here I am going to put the stuff that lets them register an account. Username,password,password confirmation -->*/}
        	    <div class="card-body" >
              {/*<!--When I get the backend to work this form will try post to createAccount and make a user then if successful go to main page but for now it is going to be doing nothing --> */}
                <form action={this.state.formActionRedirect} method="POST" >
                {/*		<!-- gathering information from users --> */}
        					<div class="form-group">
          					<label for="usernameForm"> Username </label>
        						<input type="text" class="form-control" value={this.state.nameText} onChange={this.handleChange} name="usernameForm" id="usernameForm" placeholder="Enter Username" required/>
        					</div>
        					<div class="form-group">
          				  <label for="passwordForm">Password </label>
        						<input type="password" class="form-control" value={this.state.pwText} onChange={this.handleChange} name="passwordForm" id="passwordForm" placeholder="Enter Password" required/>
        					</div>
        					<div class="form-group">
        					  <label for="passwordConfirmForm">Confirm Password </label>
        						<input type="password" class="form-control" value={this.state.pwTextConfirm} onChange={this.handleChange} name="passwordConfirmForm" id="passwordConfirmForm" placeholder="Confirm Password"  required />
                  </div>
                  {/* 					<!-- Submitting the form  --> */}
        					<input type="submit" class="btn" value="Create Account" name="submit" style={{backgroundColor:'#30a7d7'}}  />
        				</form>
              </div>
        		</div>
        	</div>
      );
    }//end of render function
}//end of RegisterForm class

ReactDOM.render( <RegisterForm />,   document.getElementById('registerForm') );
