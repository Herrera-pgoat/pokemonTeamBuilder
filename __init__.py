#This is the init py file but I don't  konw what to put in here :(
import os

#importing flask
from flask import Flask,render_template

#Function Name :create_app
def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='iorwj380jrir8(U#$jiofj04',
		#I guess this is where the database will be
		#plan on switching this to mongoDB
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
		#This is loading it from a python file how cool
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
		#this is because we don't have a config.py so we are just doing it old school
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # loads teh pages.py file with all of the routes and stuff 
    from . import pages
    app.register_blueprint(pages.bp)


    return app
