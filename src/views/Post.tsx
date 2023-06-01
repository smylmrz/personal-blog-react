import { useParams } from "react-router-dom";
import { posts } from "../data/posts.ts";
import { Post as PostType } from "../types/Post.ts";
import { Title } from "../components/Title.tsx";

function Post(){
    const { slug } = useParams();
    const post: PostType | undefined = posts.find((post) => post.slug === slug);

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
       <div className="space-y-10 py-40">
           <div className="space-y-5">
               <h1 className="text-4xl font-bold">{post?.title}</h1>
               <h2 className="text-2xl font-medium">{post?.subtitle}</h2>
           </div>

           <div className="grid grid-cols-12 align-items-start gap-10">
               <div className="col-span-9">
                   <div className="space-y-8">

                       <p className="text-lg leading-relaxed">{post?.content}</p>
                   </div>
               </div>
               <div className="sticky top-10 h-fit col-span-3">
                   <div className="space-y-5">
                       <Title>
                           Table of Contents
                       </Title>
                       <ul className="space-y-4">
                           {headings.map(heading => <li>
                               <a className="opacity-80 hover:opacity-100 duration-200" href="">{heading}</a>
                           </li>)}
                       </ul>
                   </div>
               </div>
           </div>
       </div>

    )
}

export default Post;