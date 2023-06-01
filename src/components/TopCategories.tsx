import Tag from "./Tag.tsx";
import { Title } from "./Title.tsx";

function TopCategories() {

    const categories = [
        {
            id: 1,
            name: "React",
            slug: "react"
        },
        {
            id: 2,
            name: "Vue",
            slug: "vue"
        },
        {
            id: 3,
            name: "Career",
            slug: "career"
        },
        {
            id: 4,
            name: "CSS",
            slug: "css"
        },
        {
            id: 5,
            name: "JavaScript",
            slug: "javascript"
        }

    ]

    return (
        <div className="space-y-6">
            <Title>Top Categories</Title>
            <div className="flex gap-2 flex-wrap">
                {categories.map((category) =>
                    <Tag content={category.name} to={category.slug} key={category.id}/>)
                }
            </div>
        </div>
    )
}

export default TopCategories