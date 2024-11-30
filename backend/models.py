class User:
    def __init__(self,first_name,last_name,mail,phone,gender,password,confirm_password):
        self.first_name=first_name 
        self.last_name=last_name
        self.mail=mail
        self.phone=phone 
        self.gender=gender
        self.password=password
        self.confirm_password=confirm_password 
    def set_first_name(self,first_name):
        self.first_name=first_name 
    def set_last_name(self,last_name):
        self.last_name=last_name
    def set_mail(self,mail):
        self.mail=mail 
    def set_phone(self,phone):
        self.phone=phone
    def set_gender(self,gender):
        self.gender=gender 
    def set_password(self,password):
        self.password=password
    def set_confirm_password(self,confirm_password):
        self.confirm_password=confirm_password 
    
    def __str__(self):
        return {'First_Name':self.first_name,
                'Last_Name':self.last_name,
                'Phone':self.phone,
                'Gender':self.gender,
                'Password':self.password,
                'Confirm_Password':self.confirm_password,
                'Mail':self.mail
                }
    