import conf from "../conf/conf";
import {Client, Databases, ID, Storage, Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;


    constructor(){
        this.client
        .setEndpoint(conf.appwriterUrl)
        .setProject(conf.appwriterProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
           return  await this.databases.createDocument(
            conf.appwriterDatabaseId,
            conf.appwriterColleactionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId,
                
            }
           )
            
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            
        }

    }

    async updatePost( slug, {title, content,  featuredImage, status }){
        try {
            return await this.databases.updateDocument(
                conf.appwriterDatabaseId,
                conf.appwriterColleactionId,
                slug,
                {
                 title,
                 content,
                 featuredImage,
                 status,   
                }
            )
            
        } catch (error) {
            console.log("Appwrite service :: updatePost :: erro", error);
            
        }

    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.appwriterColleactionId,
                conf.appwriterDatabaseId,slug
             )
             return true
            
        } catch (error) {
            console.log("Appwrite service :: deletePost ::  error", error);
            return false
            
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriterDatabaseId,
                conf.appwriterColleactionId,
                slug
            )
            
        } catch (error) {
            console.log("Appwrite service :: getPost :: erro", error);
            return false
            
        }

    }
    async getPosts(queries = [Query.equal("status", "active")
    ]){
        try {
            return await this.databases.listDocuments(
                conf.appwriterDatabaseId,
                conf.appwriterColleactionId,
                queries,
                
            )
            
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false
            
        }

    }

    //file uploadfile service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriterBucketId,
                ID.unique(),
                file,
            )
            
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false
            
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriterBucketId,
                fileId
            )
            
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error );
            return false
            
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriterBucketId,
            fileId
        )
    }
   
}

const service = new Service()
export default service