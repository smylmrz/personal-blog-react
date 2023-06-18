import { Title } from "./Title.tsx";
import Post from "./Post.tsx";
import { Post as PostInterface } from "../types/Post.ts"
import { supabase } from "../supabaseClient.ts";
import { useEffect, useState } from "react";
function RecentPosts() {

    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState<PostInterface[]>([])

    useEffect(() => {
        const getPosts = async () => {
            setLoading(true)
            const { data: posts, error } = await supabase.from('posts').select("*")

            setLoading(false)

            if (error) {
                console.warn(error)
                return
            }

            if (posts) {
                setPosts(posts)
            }
        }

        getPosts()
    })

    return (
        <div className="space-y-6">
            <Title>Recently Published</Title>

            <div className="space-y-16">
                {posts.map((post) => <Post post={post} key={post.id}/>)}
            </div>
        </div>
    )
}

export default RecentPosts