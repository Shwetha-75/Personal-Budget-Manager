# firebase admin 
import firebase_admin
# credentials,auth,firestore 
from firebase_admin import credentials,auth,firestore 


class Configuration:
    def __init__(self):
        cred=credentials.Certificate(r"C:\Users\SHWETHA\Desktop\24-12-28-Budget-Manager\Personal-Budget-Manager\backend\budget-manager-a9bc6-firebase-adminsdk-2ijcx-679112c4e0.json")
        firebase_admin.initialize_app(cred)
    def get_database(self):
        return firestore.client()
    
if __name__=='__main__':
    pass