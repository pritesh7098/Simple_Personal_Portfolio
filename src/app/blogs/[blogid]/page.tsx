import React from 'react'
import { PrismaClient } from '@prisma/client';
import { bricolage_grotesque } from '@/utils/fonts';
import { Avatar, Link } from '@radix-ui/themes';
import { formatDate } from '@/utils/formatdate';
import BlogPage from './components/BlogPage';
import { calculateReadingTime } from '@/utils/blogReadingTime';
const prisma = new PrismaClient();

export default async function page({ params }: { params: { blogid: string } }) {
    const { blogid } = params;

    const blog = await prisma.blog.findUnique({
        where: { id: blogid },
    });


    if (!blog) {
        return <div className='flex justify-center items-center h-screen'>Blog not found</div>;
    }

    const readingTime = calculateReadingTime(blog.content);

    return (
        <div className='w-full mt-40 max-[1025px]:px-4 max-[1285px]:px-4 max-lg:px-0 max-sm:px-0 flex flex-col gap-10 items-center pb-8'>
            <div className={`${bricolage_grotesque} px-80 max-[1285px]:px-60 max-sm:px-4 max-lg:px-20`}>
                <h1 className='text-4xl max-sm:text-3xl font-bold'>{blog.title}</h1>
                <div className="mt-5 flex items-center gap-2">
                    <Avatar
                        src="/fardeen.jpg"
                        fallback="A"
                        radius='full'
                        size='2'
                    />
                    <Link href='https://x.com/intent/follow?screen_name=fardeen14693425' underline='none' className='text-sm text-black dark:text-white'>{blog.author}</Link>
                    <p className='text-sm max-sm:text-xs'>{formatDate(blog.createdAt.toString())}</p>
                    <p className='text-sm max-sm:text-xs'>{readingTime}</p>

                </div>
                <div className="mt-10">
                    <BlogPage public_id={blog.image_public_id} />
                </div>
                <div className='prose lg:prose-xl dark:prose-dark mt-7'>
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>
            </div>
        </div>
    )
}
