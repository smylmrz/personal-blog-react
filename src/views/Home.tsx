import TopCategories from "../components/TopCategories.tsx";
import RecentPosts from "../components/RecentPosts.tsx";
import PopularContent from "../components/PopularContent.tsx";
import Newsletter from "../components/Newsletter.tsx";

function Home () {

    return (
        <div className="container space-y-20 px-5 lg:px-0 py-10 lg:py-40 mx-auto">
            <div className="flex flex-col lg:grid grid-cols-12 align-items-start gap-10 lg:gap-20">
                <div className="lg:col-span-8">
                    <RecentPosts />
                </div>
                <div className="lg:col-span-4 lg:sticky top-10 h-fit space-y-20">
                    <TopCategories/>
                    <PopularContent/>
                </div>
            </div>

            <Newsletter />
        </div>
    )
}

export default Home