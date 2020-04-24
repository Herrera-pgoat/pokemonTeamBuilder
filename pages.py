from flask import Blueprint, flash, g, redirect, render_template, request, session, url_for
#I need to import this stuff for the password checking and hashing
from werkzeug.security import check_password_hash, generate_password_hash
#importing for the database stuff
from . import db
import os
import json
from pokemonProject.models import User, PokeTeams, Pokemon
#this is the blueprint for the website
#This site is going to be so small that I probably didn't need a blueprint but I wanted to have all of my views in one place
#the empty '' says that we don't want any of the views below prepended by any thing like /something then it would look like /something/about.html
bp = Blueprint('', __name__)

#This is the main page so we don't have any slashes we just go to main place domain
@bp.route('/',methods=['GET','POST'])
def mainPage():
    #getting the username session if they are signed in
    username = session.get('username')
    pokemonTeam = []
    if not(username is None):
        #I should query the database that way I can get the team that I have saved
        pokeTeam = PokeTeams.query.filter_by(username=username).first()
        if not(pokeTeam is None):
            return loadTeam(username,pokeTeam.pokemonTeamName)


    else:
        print('hello')
    #No matter what I am going to send a list of all the pokemon I have from the database
    #allPokemon = Pokemon.query.filter_by().all()
    #on a post I expect to have logged in so I will try to log them in
    THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
    my_file = os.path.join(THIS_FOLDER, 'pokemonList.json')
    with open(my_file, 'r') as myfile:
        data=myfile.read()
    #THis is the json file with all the item names
    pokemonInformation = json.loads(data)
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
            return redirect(url_for('.mainPage',pokeStuff=pokemonInformation,pokeTeam=pokemonTeam))

            #if we are here then the user is 'logged in'
        else:
            flash("The password does not match the usernames")


    return render_template('/pokemonProjectPages/home.html',pokeStuff=pokemonInformation,pokeTeam=pokemonTeam)
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

#this route is saving teams to the
@bp.route('/saveTeam/<string:team_name>',methods=['GET','POST'])
def saveTeam(team_name):
    #if we are post then we are going save a team
    if (request.method == 'POST'):
        #getting the username of the user
        username = session.get('username')

        #if they are not signed in as a user then we take them to about and flash a message
        if (username is None):
            flash('You are not signed in. Try signing in!')
            return render_template('/pokemonProjectPages/about.html')

        pokeTeamUser = PokeTeams.query.filter_by(username=username,pokemonTeamName=team_name).first()
        if not(pokeTeamUser is None):
            flash('You already have a pokemon team named {}. Try something else'.format(team_name))
            return render_template('/pokemonProjectPages/about.html')
        #getting the name of every pokemon
        pokeName1 = request.form['poke1']
        pokeName2 = request.form['poke2']
        pokeName3 = request.form['poke3']
        pokeName4 = request.form['poke4']
        pokeName5 = request.form['poke5']
        pokeName6 = request.form['poke6']

        #creating a pokemon team then adding it to the database
        newPokeTeam = PokeTeams(username= username,pokemonTeamName=team_name,pokemonName1=pokeName1,pokemonName2=pokeName2,pokemonName3=pokeName3,pokemonName4=pokeName4,pokemonName5=pokeName5,pokemonName6=pokeName6)
        db.session.add(newPokeTeam)
        db.session.commit()

        THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
        my_file = os.path.join(THIS_FOLDER, 'pokemonList.json')
        with open(my_file, 'r') as myfile:
            data=myfile.read()
        #THis is the json file with all the item names
        pokemonInformation = json.loads(data)

        return redirect(url_for('.mainPage'))
    else:
        flash("I have no idea how you got there but don't try it again ")
        return redirect(url_for('.aboutPage'))

#this route is saving teams to the
@bp.route('/updateTeam/<string:team_name>',methods=['GET','POST'])
def updateTeam(team_name):
    #if we are post then we are going save a team
    if (request.method == 'POST'):
        #getting the username of the user
        username = session.get('username')

        #if they are not signed in as a user then we take them to about and flash a message
        if (username is None):
            flash('You are not signed in. Try signing in!')
            return render_template('/pokemonProjectPages/about.html')

        pokeTeamUser = PokeTeams.query.filter_by(username=username,pokemonTeamName=team_name).first()

        #getting the name of every pokemon
        pokeName1 = request.form['poke1']
        pokeName2 = request.form['poke2']
        pokeName3 = request.form['poke3']
        pokeName4 = request.form['poke4']
        pokeName5 = request.form['poke5']
        pokeName6 = request.form['poke6']

        #updating the name of every pokemon in the team just incase there were changes
        pokeTeamUser.pokemonName1 = pokeName1
        pokeTeamUser.pokemonName2 = pokeName2
        pokeTeamUser.pokemonName3 = pokeName3
        pokeTeamUser.pokemonName4 = pokeName4
        pokeTeamUser.pokemonName5 = pokeName5
        pokeTeamUser.pokemonName6 = pokeName6

        #Updating the database with this new information
        db.session.commit()
        return redirect(url_for('.loadTeam',username=username,team_name=team_name))
    else:
        flash("I have no idea how you got there but don't try it again ")
        return redirect(url_for('.aboutPage'))

@bp.route('/<string:username>/<string:team_name>',methods=['GET','POST'])
def loadTeam(username,team_name):
    #I have the username and the teamname so I am going to load in this usernames team
    username = session.get('username')

    #if they are not signed in as a user then we take them to about and flash a message
    if (username is None):
        flash('You are not signed in. Try signing in!')
        return render_template('/pokemonProjectPages/about.html')

    #bring in all the pokemon after we know we are at least going to the main page
    THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
    my_file = os.path.join(THIS_FOLDER, 'pokemonList.json')
    with open(my_file, 'r') as myfile:
        data=myfile.read()
    pokemonInformation = json.loads(data)

    pokemonTeam = []
    pokeTeamUser = PokeTeams.query.filter_by(username=username,pokemonTeamName=team_name).first()
    allPokeTeams = PokeTeams.query.filter_by(username=username).all()
    pokemonTeamNames = []
    #getting the name of all pokemon teams this user has
    for pokeTeam in allPokeTeams:
        pokemonTeamNames.append(pokeTeam.pokemonTeamName)
        print(pokeTeam.pokemonTeamName)
    #if we don't find a team with this thing loaded in
    if (pokeTeamUser is None):
        return render_template('/pokemonProjectPages/home.html',pokeStuff=pokemonInformation,pokeTeam=pokemonTeam,allPokeTeams=pokemonTeamNames,teamName=team_name)
    else:
        #we did find a team with the user stuff in it
        pokemonTeam.append(pokeTeamUser.pokemonName1)
        pokemonTeam.append(pokeTeamUser.pokemonName2)
        pokemonTeam.append(pokeTeamUser.pokemonName3)
        pokemonTeam.append(pokeTeamUser.pokemonName4)
        pokemonTeam.append(pokeTeamUser.pokemonName5)
        pokemonTeam.append(pokeTeamUser.pokemonName6)
        return render_template('/pokemonProjectPages/home.html',pokeStuff=pokemonInformation,pokeTeam=pokemonTeam,allPokeTeams=pokemonTeamNames,teamName=team_name)


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
