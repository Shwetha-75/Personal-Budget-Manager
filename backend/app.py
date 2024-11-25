from flask import Flask,redirect,render_template,request,request,url_for,jsonify
from flask_mysqldb import MySQL
import MySQLdb.cursors 
import re 
from flask_cors import CORS

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

@app.route('/login',methods=['GET','POST'])
def main():
    # msg='

    data=request.json
    name=data.get('username')
    password=data.get('password')
    print("User Name :",name)
    print("Password: ",password)
    return jsonify({"message":f"Form received: UserName: {name}, Password:{password}"})
    
    # if request.method=='GET' and 'username' in request.form and 'password' in request.form:                                                        
    #     cursor=mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    #     cursor.execute('select * from user')
    #     account=cursor.fetchone()
    #     # testing
    #     # print(account)
    #     return jsonify({"message":'Message from flask'})
    # return render_template("index.html")

if __name__=="__main__":
    app.debug=True 
    app.run()
