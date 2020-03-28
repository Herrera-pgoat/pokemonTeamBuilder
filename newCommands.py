from flask import Blueprint, flash, g, redirect, render_template, request, session, url_for
#I need to import this stuff for the password checking and hashing
from werkzeug.security import check_password_hash, generate_password_hash
#importing for the database stuff
from . import db
from pokemonProject.models import User, PokeTeams, Pokemon
#this is the blueprint for the website
#This site is going to be so small that I probably didn't need a blueprint but I wanted to have all of my views in one place
#the empty '' says that we don't want any of the views below prepended by any thing like /something then it would look like /something/about.html
bp = Blueprint('poke', __name__)

#Creating a command that will initialize the database of pokemon names and their tableTypes
@bp.cli.command('init_poke_db')
def initPokeDb():
    def cleaningType2(row):
        if row.Type == row.Type2:
            row.Type2 = ''
        return row

    import pandas as pd

    #okay I guess that is the encoding
    pokemon = pd.read_csv('C:\\Users\\levih\\Desktop\\flaskStuff\\pokemonProject\\pokemon_types.csv',encoding="iso8859_16")
    #print(pokemon.head())
    #printing the name of the columns that are in pokemon
    #print(pokemon.columns.values.tolist())
    #I am removing the columns that I do not want in the list
    pokemonCleaning = pokemon.drop(columns=['MS','Kdex','Ndex','Jdex','Hdex','Sdex','Udex','Ce/Co/Mo Kdex','Adex','Gdex'])
    #print(pokemonCleaning.head())
    #The only values I want in either type column
    pokemonTypes = ['Bug','Dark','Dragon','Electric','Fairy','Fighting','Fire','Flying','Ghost','Grass','Ground','Ice','Normal','Poison','Psychic','Rock','Steel','Water']

    #Now I have all the data I want and it is offically cleaned. Removed ugly columns and got data that is relevent. and removed
    pokemonCleaned = pokemonCleaning.loc[pokemonCleaning.Type.isin(pokemonTypes)].apply(cleaningType2, axis='columns').rename(columns={'Type':'Type1'})
    #now I need to add pokemonCleaned to the database
    for onePokemon in pokemonCleaned.iterrows():
        #Adding each pokemon to the database
        newPokemon = Pokemon(pokemonName =onePokemon[1][0],type1=onePokemon[1][1],type2=onePokemon[1][2])
        db.session.add(newPokemon)
        db.session.commit()
        #I need to add each pokemon to pokmon db
    #print(pokemonCleaned.head(20))
    #print(pokemonCleaned.groupby(['Type1','Type2']).size().sort_index())
