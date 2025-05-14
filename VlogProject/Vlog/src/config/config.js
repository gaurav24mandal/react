const config = {
  appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
  appwriteprojectId : String(import.meta.env.VITE_ARRWRITE_PROJECT_ID),
  appwriteDBid : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}
export default config