import { useParams } from "react-router-dom";
import { Post as PostType } from "../types/Post.ts";
import { Title } from "../components/Title.tsx";
import { useEffect, useState } from "react";
import Markdown from "../components/Markdown.tsx";
import { supabase } from "../supabaseClient.ts";

function Post(){
    const { slug } = useParams();

    const [post, setPost] = useState<PostType | null>(null)

    useEffect(() => {
        document.title = post?.title as string;

        const getPost = async () => {
            const { data: post, error } = await supabase.from("posts")
                .select("*")
                .eq("slug", slug)

            if (error){
                console.warn(error)
                return
            }

            console.log(post)
            if (post){
                setPost(post as any)
            }
        }

        getPost()
    }, []);

    const headings = [
        'Introduction',
        'Variable names as labels',
        'Reassigning our labels',
        'Primitive data types',
        'Additional resources'
    ]

    if (!post) {
        return <div>Post not found</div>
    }
    
    return (
        <div className="container mx-auto">
            <div className="space-y-10 py-20">
                <div className="space-y-5">
                    <h1 className="text-4xl font-bold">{post?.title}</h1>
                    <h2 className="text-2xl font-medium">{post?.subtitle}</h2>
                </div>

                <div className="grid grid-cols-12 align-items-start gap-10">
                    <div className="col-span-9">
                        <div className="space-y-8">
                            <Markdown className="text-lg leading-relaxed" source={post?.content} />
                        </div>
                    </div>
                    <div className="sticky top-10 h-fit col-span-3">
                        <div className="space-y-5">
                            <Title>
                                Table of Contents
                            </Title>
                            <ul className="space-y-4">
                                {headings.map(heading => <li key={heading}>
                                    <a className="opacity-80 hover:opacity-100 duration-200" href="">{heading}</a>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Post;