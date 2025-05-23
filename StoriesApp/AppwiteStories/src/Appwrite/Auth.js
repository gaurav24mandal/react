import { Client, Account, ID } from "appwrite";
import Conf from "../Conf/Conf"
class AuthService {
    client = new Client() ;
    account;
constructor(){
    this.client
    .setProject(Conf.appwriteprojectId)
    .setEndpoint(Conf.appwriteUrl)
    this.account = new Account(this.client)
}
   createAccount =  async ({userName , email , password})=>{
           try {
               const userAccount  = await this.account.create(ID.unique(),email,password , userName)
                 return userAccount
                 ? await this.login({email, password})
                 : null
           } catch (error) {
               console.log(`error in createaccount ${error}`);
                return null
           }
 }
   login = async ({email , password})=>{
          try {
               const user = await this.account.createEmailPasswordSession(email, password)
                return user? user: null
          } catch (error) {
             console.log(`error in Login Authservice ${error}`);
              return null;
        }
   }
   getCurrentUser = async ()=>{
         try {
            
             const userData = await this.account.get();
             return userData
         } catch (error) {
            console.log(`error in getCurrent user at Auth : ${error}`);
             return null;
         }
   }
   logout = async ()=>{
          try {
              await this.account.deleteSessions()
          } catch (error) {
             console.log(`error in logout in auth : ${error}`);
             return null
          }   
   }
}  


const Service = new AuthService()

export default Service