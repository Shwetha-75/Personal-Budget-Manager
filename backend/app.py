from flask import Flask,redirect,render_template,request,request,url_for,jsonify
from flask_mysqldb import MySQL
import MySQLdb.cursors 
import re 
from flask_cors import CORS
from Validation import PasswordValidation

# Enable CORS for all routes
app=Flask(__name__)
CORS(app)
app.secret_key="secret_key_app"

# app configuration
app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='root321'
app.config['MYSQL_DB']='personal_budget_manager'

mysql=MySQL(app)

@app.route("/",methods=['GET'])
def index():
    return jsonify({"message":'Message from flask'})

def checking_password(user_entered_password,user_database_password):
    return PasswordValidation.validation(user_entered_password,user_database_password)

@app.route('/login',methods=['GET','POST'])
def main():

    flag=False
    data=request.json
    name=data.get('username')
    password=data.get('password')
    
    cursor=mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    
    query = "SELECT * FROM user WHERE user_name=%s"
    cursor.execute(query, (name,))
    account = cursor.fetchone()
    
    #print(account)  #{'user_name': 'shwethak42@gmail.com', 'password': 'Shwetha@123'}
    #testing
     
    if account:
        flag=checking_password(password,account['password'])
                                      
    return jsonify({"status":True,"message":{"username":name,"password":password}}) if flag else jsonify({"status":False,"message":'User as entered invalid credentials'})
    

if __name__=="__main__":
    app.debug=True 
    app.run()
