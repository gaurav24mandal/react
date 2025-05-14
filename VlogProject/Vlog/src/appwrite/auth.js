import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class Authservice {
     client = new Client();
     account ;

     constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteprojectId);

        this.account = new Account(this.client)
      }
    async createAcount ({email,password , name}){
         try {
           const userAccount =   await this.account.create(ID.unique(), email , password , name);
          if(userAccount){
                return this.login({email, password})
           }else{
            userAccount
           }
         } catch (error) {
              console.log('error :: createAccount ::', error);
              
         }
    }

    async login({email , password}){
        try {
            const  user = await this.account.createEmailPasswordSession(email, password) 
            return user
        } catch (error) {
             console.log(`error is login: ${error}`);
           }
    }

    async getCurrentUser(){
        try {
            return await this.account.get() 
        } catch (error) {
             console.log(`erriin getCUrrenlt : ${error}`);
          }
          return null
    }
    async logout(){
         try {
             await this.account.deleteSessions()
         } catch (error) {
             console.log(`error in Logout : ${error}`);
             
         }
    }
}
  



const authService = new Authservice()

export default  authService
