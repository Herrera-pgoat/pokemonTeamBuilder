from flask import Blueprint, flash, g, redirect, render_template, request, session, url_for

#this is the blueprint for the website
#This site is going to be so small that I probably didn't need a blueprint but I wanted to have all of my views in one place
#the empty '' says that we don't want any of the views below prepended by any thing like /something then it would look like /something/about.html
bp = Blueprint('', __name__)

#This is the main page so we don't have any slashes we just go to main place domain
@bp.route('/',methods=['GET','POST'])
def mainPage():
    return render_template('/pokemonProjectPages/home.html')
    #we are going to return to the main index screen where

#This is the register page
@bp.route('/register',methods=['GET','POST'])
def register():
    return render_template('/pokemonProjectPages/register.html')
    #we are right now not doing anything I just want to get the views in a Function

@bp.route('/about',methods=['GET'])
def aboutPage():
    return render_template('/pokemonProjectPages/about.html')
    #we will return the about page here
