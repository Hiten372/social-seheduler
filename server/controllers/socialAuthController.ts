import {Request,Response} from 'express';

// Generate OAuth authorization URL
//Get /api/auth/:platform
export const generateAuthUrl = async (req:Request,res:Response):Promise<void>=>{
    try{
        const {platform} =  req.params;
    }catch(error){
        
    }
   
    
};