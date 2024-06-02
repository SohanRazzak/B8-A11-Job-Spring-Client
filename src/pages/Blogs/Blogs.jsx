import { Helmet } from "react-helmet-async";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";
import useJobFinder from "../../hooks/useJobFinder/useJobFinder";
import { Spinner } from "keep-react";
import BlogCard from "../../components/BlogCard/BlogCard";

const Blogs = () => {
    const blogPosts = useJobFinder(['blog Posts'], '/get-blog-posts');
    const { data, isLoading } = blogPosts;
    if (isLoading || data == undefined) {
        return (
            <div className="h-[400px] grid place-items-center">
                <Spinner color="info" size="xl" />
            </div>
        );
    }
    return (
        <div>
                <Helmet><title>Job Spring - Blog Posts</title></Helmet>
            <ContainerLayout>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center px-5">
                    {data.map(post => <BlogCard key={post._id} post={post}/>)}
                </div>
            </ContainerLayout>
        </div>
    );
};

export default Blogs;
