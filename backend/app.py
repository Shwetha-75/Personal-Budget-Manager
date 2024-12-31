from flask import Flask,redirect,render_template,request,request,url_for,jsonify,json
from flask_cors import CORS
from config import *
from userValidation import *
from models import *
# Enable CORS for all routes
app=Flask(__name__)
app.secret_key="secret_key_app"

db=Configuration().get_database()
CORS(app)

@app.route('/registration',methods=['POST','GET'])
def create():
    if request.method=='POST':
        
        data=request.json['userData']
        # validating the user already exists or not 
        # calling the user validation module to check the mail exist in the database or not 
        if UserValidation().checking_user_exist(data['mail'],db):
            return "no"
        # creating the user data by adding all the data 
        user_data=User(
            data['first_name'],
            data['last_name'],
            data['phone'],
            data['gender'],
            data['password'],
            data['confirm_password'],
            data['mail']
            )
        # saving the user data by id 
        db.collection('user_model_table').document(data['mail']).set(user_data.__str__())
    return "ok"
@app.route('/login',methods=['GET','POST'])
def login():
    if request.method=='POST':
        # converting the request data to json (own data structure)
        user_data=request.json['user']
        # trying to finding the user exist 
        doc_ref=db.collection('user_model_table').document(user_data['mail'])
        doc=doc_ref.get()
        if doc.exists:
            # if exists
            # get the password form data 
            u_password=user_data['password']
            # converting the data to dict 
            u_data=doc.to_dict()
            # validating password of user data from db and from form 
            if u_data['password']==u_password:
                return "ok"
            else:
                return "no"
        else:
            return "not"
    
@app.route('/')
def index():
    return "working fine!!"

if __name__=="__main__":
  app.run(debug=True)
