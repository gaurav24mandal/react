import { Client, ID, Databases, Storage, Query } from "appwrite";
import config from "../Conf/Conf";

class CrudService {
    client = new Client();
    database;
    bucket;

    constructor(){
        this.client.setEndpoint(config.appwriteUrl);
        this.client.setProject(config.appwriteprojectId);
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }
    async createPost({title, slug,content , featuredImage, status, userID}){
              try {
                  await this.database.createDocument(
                    config.appwriteDBid,
                    config.appwriteCollectionId,
                    slug,
                    ['*'],
                    {
                        Title: title,                 
                        content,              
                        featuredImage,  
                        status,                
                        userID               
                    }
                  )
              } catch (error) {
                     console.log(`error in createPost crudService ${error}`);
                     
              }
    }
    async updatePost (slug, {title , content , featuredImage,status}){
           try {
               await this.database.updateDocument(
                config.appwriteDBid,
                config.appwriteCollectionId,
                slug,
             {
                title,
                content,
                featuredImage,
                status,
             }
               )
           } catch (error) {
              console.log(`error in update Post in Crud serive ${error}`);
              
           }
    }
    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }
    async getPost(slug){
        try {
            return await this.database.getDocument(
                config.appwriteDBid,
                config.appwriteCollectionId,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.database.listDocuments(
                config.appwriteDBid,
                config.appwriteCollectionId,
                queries,
             )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }
    // file upload
    async createFile(file){
        try {
               return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
             )
        } catch (error) {
             `error in create file crud service ${error}`
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
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId) {
        if (!fileId) {
            console.error("getFilePreview Error: Missing fileId");
            return null; // Or return a default image URL
        }
        return this.bucket.getFileView(config.appwriteBucketId, fileId);
    }

}
const Crud = new CrudService()

export default Crud