import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); 


cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

interface CloudinaryUploadResult {
    public_id: string;
    [key: string]: unknown
}

export async function POST(req:NextRequest) {
  try {
      const formData = await req.formData();
      const file = formData.get("file") as File | null;
      const title = formData.get("title");
      const content = formData.get("content");

      if(!file){
        return NextResponse.json(
            { error: "File not found" }, 
            { status: 400 }
        )
    }

      if(!title || !content) {
        return NextResponse.json(
            { error: "Title and content are required" },
            { status: 400 }
        )
    }

      
       const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        const result = await new Promise<CloudinaryUploadResult>(
            (resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    {folder: "next-cloudinary-uploads"},
                    (error, result) => {
                        if(error) reject(error);
                        else resolve(result as CloudinaryUploadResult);
                    }
                )
                uploadStream.end(buffer)
            }
        )

        const blog = await prisma.blog.create({
            data: {
                title: title.toString(),
                content: content.toString(),
                author: "Fardeen Mansoori",
                image_public_id: result.public_id,
                createdAt: new Date()
            }
        })

       console.log(blog)
      
      return NextResponse.json(
        { message: "File uploaded successfully!" },
        {status: 200}
    );
    
  } catch (error) {
    return NextResponse.json({
      error: `Server Error: ${error}`
    })
  }
}