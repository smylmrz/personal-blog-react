import Tag from "./Tag.tsx";
import { Title } from "./Title.tsx";
import { categories } from "../data/categories.ts";
function TopCategories() {
    return (
        <div className="space-y-6">
            <Title>Top Categories</Title>
            <div className="flex gap-2 flex-wrap">
                {categories.map((category) =>
                    <Tag content={category.name} to={`category/${category.slug}`} key={category.slug}/>)
                }
            </div>
        </div>
    )
}

export default TopCategories