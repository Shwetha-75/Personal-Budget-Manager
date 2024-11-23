from flask import Flask,redirect,render_template,request,request,url_for
from flask_mysqldb import MySQL
import MySQLdb.cursors 
import re 


app=Flask(__name__)
app.secret_key="secret_key_app"

# app configuration

app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='root321'
app.config['MYSQL_DB']='personal_budget_manager'

mysql=MySQL(app)

@app.route("/")
@app.route('/login',methods=['GET','POST'])
def main():
    msg=''
    if request.method=='POST' and 'username' in request.form and 'password' in request.form:
       
        cursor=mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('select * from user')
        account=cursor.fetchone()
        print(account)
        return render_template('login_success.html')
    return render_template("index.html")

if __name__=="__main__":
    app.debug=True 
    app.run()
