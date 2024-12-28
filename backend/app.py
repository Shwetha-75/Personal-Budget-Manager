from flask import Flask,redirect,render_template,request,request,url_for,jsonify,json
from flask_cors import CORS
from config import *
from models import *
# Enable CORS for all routes
app=Flask(__name__)
app.secret_key="secret_key_app"

db=Configuration().get_database()

CORS(app)


@app.route('/create',methods=['POST','GET'])
def create():
    if request.method=='POST':
        data=request.json['userData']
    
        user_data=User(
            data['first_name'],
            data['last_name'],
            data['phone'],
            data['gender'],
            data['password'],
            data['confirm_password'],
            data['mail']
        )
        
        db.collection('user_model_table').document(data['mail']).set(user_data.__str__())
    return "Added Successfully!!"
@app.route('/')
def index():
    return "working fine!!"

if __name__=="__main__":
  app.run(debug=True)
