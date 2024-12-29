from config import *
import re 


class UserValidation:
    
    def __init__(self):
        # private key 
        self.__user_data=None 

    # checking if the user exists or not 
    def checking_user_exist(self,user_email):
    # return true if the user exists else false 
        self.__user_data=Configuration().get_database().collection('user_model_table').document(user_email).get()
        return self.__user_data.exists
    
    def get_user_data(self):
        self.__user_data=self.__user_data.to_dict() 
        return self.__user_data
    
    
    def check_password_user(self,password):
        return self.__user_data['password']==password 
    
    def password_criteria(self,password)->bool:
        # password shold satis fy all the condition
        # 1. At least one lower case
        # 2. At least one upper case 
        # 3. one numeric character 
        # 4. one special symbol [~!#$%^&@*]
        # 5. length of the password should be 8-15 character length 
        if len(password)<8 or len(password)>15: return False 
        return (
            len(re.findall('[a-z]',password))!=0 and 
            len(re.findall('[A-Z]',password))!=0 and 
            len(re.findall('[0-9]',password))!=0 and 
            len(re.findall('[~!#$%^&@*]',password)) 
            )
        