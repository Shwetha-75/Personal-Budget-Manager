# firebase admin 
import firebase_admin
# credentials,auth,firestore 
from firebase_admin import credentials,auth,firestore 


class Configuration:
    def __init__(self):
        cred=credentials.Certificate(r"C:\Users\SHWETHA\Downloads\budget-manager-a9bc6-firebase-adminsdk-2ijcx-679112c4e0.json")
        firebase_admin.initialize_app(cred)
        self.db=firestore.client()
    def get_database(self):
        return self.db
    
if __name__=='__main__':
    pass