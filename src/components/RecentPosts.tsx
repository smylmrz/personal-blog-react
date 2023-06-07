import { Title } from "./Title.tsx";
import Post from "./Post.tsx";
import { posts } from "../data/posts.ts";

function RecentPosts() {

    return (
        <div className="space-y-6">
            <Title>Recently Published</Title>

            <div className="space-y-16">
                {posts.map((post) => <Post post={post} key={post.slug}/>)}
            </div>
        </div>
    )
}

export default RecentPosts