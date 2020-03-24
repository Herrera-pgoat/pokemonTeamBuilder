from . import db

#https://flask-sqlalchemy.palletsprojects.com/en/2.x/models/
#Excellent documentation on sql alchemy stuff is in that link
class User(db.Model):
    username = db.Column(db.String(64),primary_key=True, index=True, unique=True)
    password_hash = db.Column(db.String(256))
    password_salt = db.Column(db.String(128))
    pokemonTeams = db.relationship('PokeTeams',backref='user',lazy=True)

    def __repr__(self):
        return '<User {}>'.format(self.username)

class PokeTeams(db.Model):
    #Two primary keys!
    username = db.Column(db.String(64), db.ForeignKey(User.username) ,primary_key = True)
    pokemonTeamName = db.Column(db.String(128), primary_key=True)
    #Storing the pokemon names and then we are using the names to get the type
    pokemonName1 = db.Column(db.String(20))
    pokemonName2 = db.Column(db.String(20))
    pokemonName3 = db.Column(db.String(20))
    pokemonName4 = db.Column(db.String(20))
    pokemonName5 = db.Column(db.String(20))
    pokemonName6 = db.Column(db.String(20))

    def __repr__(self):
        return '<User {}> '.format(self.username)

class Pokemon(db.Model):
    #longest pokemon name is 11 and it is fletchinder or something like that
    pokemonName = db.Column(db.String(20), primary_key=True)
    #The longest pokemon type name is 8
    type1 = db.Column(db.String(10))
    type2 = db.Column(db.String(10))

    def __repr__(self):
        return '<Pokemon Name {}>'.format(self.pokemonName)
