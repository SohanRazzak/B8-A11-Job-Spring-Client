import { Card } from "keep-react";
import { Button } from "keep-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
    return (
        <Card className="max-w-sm rounded overflow-hidden shadow-lg my-4 mx-auto">
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{post.title}</h2>
                <p className="text-gray-700 text-base">
                    {post.content.slice(0, 180) + "..."}
                </p>
                <p className="text-gray-500 text-sm mt-4">Published at: {post.date}</p>
                <Link to={`/blog/${post._id}`}>
                <Button
                    size="sm"
                    type="primary"
                    color="success"
                    className="mt-5"
                >
                    Read More
                </Button>
                </Link>
            </div>
        </Card>
    );
};

BlogCard.propTypes = {
    post: PropTypes.object,
};

export default BlogCard;
