import config from "../config/config";
import { Client, ID,Databases,Storage,Query } from "appwrite";

export class Service {
     client  = new Client();
    databases;
    bucket ;
    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteprojectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    async createPost({title,slug,content, featuredImage,status, userId}){
        try {
           return await  this.databases.createDocument(
                config.appwriteDBid,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
             )
        
        } catch (error) {
             console.log(`error in createPost Database ${error}`);
             
        }
    }
    async updatePost(slug,{title,content, featuredImage,status}){
         try {
             return await this.databases.updateDocument(
                config.appwriteDBid,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content, 
                    featuredImage,
                    status
                }
             )
         } catch (error) {
             console.log(`errot in updatePost database ${error}`);
             
         }
    }
    async deletePost(slug){
        try {
           await this.databases.deleteDocument(
            config.appwriteDBid,
            config.appwriteCollectionId,
            slug
           ) 
           return true 
        } catch (error) {
            console.log(`error in deletePost Database ${error}`);
             return false
        }
    }
    async getPost(slug){
        try {
           return  await this.databases.getDocument(
                config.appwriteDBid,
                config.appwriteCollectionId,
                slug,
            
            )
        } catch (error) {
             console.log(`error in getPost databse ${error}`);
              return false
        }
    }
    async getPosts(queries =[Query.equal("status","active")]){
        try {
             return this.databases.listDocuments(
                config.appwriteDBid,
                config.appwriteCollectionId,
                queries,
                
             )
             
        } catch (error) {
                console.log(`error in getposts databaase ${error}`);
                
        }
    }

    // uploading file 

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
             console.log(`error in upload file ${error}`);
              return false
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log(`error in deleteFile ${error}`);
             return false
        }
    }
    getFilePreview(fileId){
         return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
         )
    }
}

const service = new Service();

export default  service