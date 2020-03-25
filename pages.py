from flask import Blueprint, flash, g, redirect, render_template, request, session, url_for
#I need to import this stuff for the password checking and hashing
from werkzeug.security import check_password_hash, generate_password_hash
#importing for the database stuff
from . import db
from pokemonProject.models import User, PokeTeams, Pokemon
#this is the blueprint for the website
#This site is going to be so small that I probably didn't need a blueprint but I wanted to have all of my views in one place
#the empty '' says that we don't want any of the views below prepended by any thing like /something then it would look like /something/about.html
bp = Blueprint('', __name__)

#This is the main page so we don't have any slashes we just go to main place domain
@bp.route('/',methods=['GET','POST'])
def mainPage():
    #on a post I expect to have logged in so I will try to log them in
    if( request.method =="POST"):
        #We are in a post method which means they tried to log in
        #I need to check for the user name they put in and if the password they put in matches the password with that username
        username = request.form['userLogin']
        password = request.form['passwordLogin']

        user = User.query.filter_by(username=username).first()
        if(user is None):
            #That username is not in the db so they can't log in
            flash("That username is not in the database. Try creating an account!")
        elif (check_password_hash(user.password_hash,password)):
            #The username is in the database and the password matches
            session.clear()
            session['username'] = username
            return redirect(url_for('.mainPage'))

            #if we are here then the user is 'logged in'
        else:
            flash("The password does not match the usernames")

    return render_template('/pokemonProjectPages/home.html')
    #we are going to return to the main index screen where

#This is the register page
@bp.route('/register',methods=['GET','POST'])
def register():
    #If the user tried to create an account we enter here
    if (request.method == 'POST'):
        #Getting the information they put in from the form
        username = request.form['usernameForm']
        password = request.form['passwordForm']
        passwordConfirm = request.form['passwordConfirmForm']
        if(password == passwordConfirm):
            #Here we should check whether the user exists already or not
            user = User.query.filter_by(username=username).first()
            if(user is None):
                #If we enter this then no user of that name exists so we put this user in the tableTypes
                #This is correctly adding the user to the user table with a hashed password. sha256 and salt
                newUser = User(username= username,password_hash= generate_password_hash(password))
                db.session.add(newUser)
                db.session.commit()
            else:
                flash('That username already exists! Pick a new one!')
            #After we know that the user is real we should try to put them in the user #table
        else:
            #Flash is stores the message we pass as argument and sends what it stores
            #to the register.html and in there I will put out a message that says what is in the flash !
            flash('Passwords do not match')
            #If we enter this one we should send an error and still go to register.html

    #I should check whether the thing is get or post because now no matter what I am going here
    return render_template('/pokemonProjectPages/register.html')
    #we are right now not doing anything I just want to get the views in a Function

@bp.route('/about',methods=['GET'])
def aboutPage():
    return render_template('/pokemonProjectPages/about.html')
    #we will return the about page here

@bp.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('.mainPage'))

@bp.before_app_request
def load_logged_in_user():
    username = session.get('username')

    if username is None:
        g.user = None
    else:
        g.user = User.query.filter_by(username=username).first()
