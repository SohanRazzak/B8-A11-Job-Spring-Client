import Markdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import './BlogPost.css';
import { Helmet } from "react-helmet-async";

const BlogPost = () => {
    const post = useLoaderData();
    return (
        <div className="max-w-5xl bg-gray-50 mx-auto p-5 rounded-b-md">
            <Helmet>
                <title>
                    Job Spring - {post?.title}
                </title>
            </Helmet>
            <h2 className="text-2xl font-semibold text-gray-700 font-openSans mb-2">{post?.title}</h2>
            <div className="flex gap-5 bg-gray-100 px-4 my-4">
            <p className="my-4 text-sm font-medium">Published At: {post?.date}</p>
            <p className="my-4 text-sm font-medium">Published By: Job-Spring (Admin)</p>
            
            </div>
            <div className="no-tailwind-reset">
            <article>
                <Markdown>
                    {post?.content}
                </Markdown>
            </article>
            </div>
        </div>
    );
};

export default BlogPost;