#This is the init py file but I don't  konw what to put in here :(
import os

#importing flask
from flask import Flask,render_template
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
#This gives me the config.py stuff I think
#from config import Config

app = Flask(__name__)
app.config['SECRET_KEY'] ='jfieoajefij390uj8f93wji94u89893rwjf94'

db_url = 'postgresql://{user}:{pw}@{url}/{db}'.format(user='postgres',pw='123456',url='localhost:5432',db='pokemonTeamProject')
app.config['SQLALCHEMY_DATABASE_URI'] = db_url

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)
from . import models,pages,newCommands
app.register_blueprint(pages.bp)
app.register_blueprint(newCommands.bp)
#Won't lie I have no idea why the above works and the below does not but if some flask person would grace me with their knowledge I would appreciate it.
#I really want to know what the difference is between the above and below. I mean I know below is a function and above is code we run once but still!!! what material differences are there!
#Function Name :create_app
# def create_app(test_config=None):
#     # create and configure the app
#     app = Flask(__name__, instance_relative_config=True)
#     #Basically this is the default stuff If i don't include a config.py file.
#
#     app.config.from_mapping(
#         SECRET_KEY='iorwj380jrir8(U#$jiofj04',
# 		#I guess this is where the database will be
# 		#plan on switching this to postgresql
# 		#so I think here I tell it to work with postgres sql
#         #DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
#     )
#
#     if test_config is None:
#         # load the instance config, if it exists, when not testing
# 		#We load our settings from this python file if it exists. Which it DOES
#         app.config.from_pyfile('pokemonProject/config.py', silent=True)
#     else:
#         # load the test config if passed in
# 		#this is because we don't have a config.py so we are just doing it old school
#         app.config.from_mapping(test_config)
#
#     # ensure the instance folder exists
#     try:
#         os.makedirs(app.instance_path)
#     except OSError:
#         pass
#
#     #We are putting this information in the configuration of the application
#     #I am 100% sure there is a better way to do this than the way I am doing it now but I don't want to deal with that right now
#     app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#     db_url = 'postgresql://{user}:{pw}@{url}/{db}'.format(user='postgres',pw='123456',url='localhost:5432',db='pokemonTeamProject')
#     app.config['SQLALCHEMY_DATABASE_URI'] = db_url
#
#     # loads teh pages.py file with all of the routes and stuff
#     from . import pages
#     app.register_blueprint(pages.bp)
#
#     #Here I am going into the database with sqlalchemy
#     db = SQLAlchemy(app)
#     #Miggrate database with flask_migrate import
#     migrate = Migrate(app, db)
#     from . import models
#
#     return app
