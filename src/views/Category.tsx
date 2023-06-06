import { useParams } from "react-router-dom";
import { categories } from "../data/categories.ts";
import { Category as CategoryType } from "../types/Category.ts"
import { Post as PostType } from "../types/Post.ts"
import { posts } from "../data/posts.ts";
import Post from "../components/Post.tsx";

function Category(){
    const { slug } = useParams()
    const category: CategoryType | undefined = categories.find(category => category.slug === slug)

    const categoryPosts: PostType[] = posts.filter(post => post.category_id === category?.id)

    return (
        <div className="container px-5 lg:px-0 mx-auto space-y-6 py-20">
            <div className="text-4xl font-bold text-blue-500">
                {category?.name}
            </div>

            <div className="grid grid-cols-12 gap-y-10 lg:gap-x-10">
                {categoryPosts.map(post => {
                    return (
                        <div className="col-span-12 lg:col-span-6">
                            <Post key={post.id} post={post} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Category