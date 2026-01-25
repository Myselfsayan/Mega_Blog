import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-10">
            <Container>
                {/* Featured Image */}
                <div className="relative mb-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
                    <img
                        src={service.getFileView(post.featuredImage)}
                        alt={post.title}
                        className="w-full max-h-[420px] object-cover"
                    />

                    {isAuthor && (
                        <div className="absolute right-4 top-4 flex gap-2">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-600" className="w-20">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-600" className="w-20" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                {/* Title */}
                <h1 className="mb-6 text-3xl font-bold text-slate-900 dark:text-slate-100">
                    {post.title}
                </h1>

                {/* Content */}
                <div
                    className="
                        prose prose-slate max-w-none
                        dark:prose-invert
                        prose-img:rounded-xl
                    "
                >
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}
