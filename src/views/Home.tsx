import TopCategories from "../components/TopCategories.tsx";
import RecentPosts from "../components/RecentPosts.tsx";
import PopularContent from "../components/PopularContent.tsx";
import Newsletter from "../components/Newsletter.tsx";

function Home () {

    return (
        <div className="container space-y-20 py-40 mx-auto">
            <div className="grid grid-cols-12 align-items-start gap-20">
                <div className="col-span-8">
                    <RecentPosts />
                </div>
                <div className="sticky top-10 h-fit col-span-4 space-y-20">
                    <TopCategories/>
                    <PopularContent/>
                </div>
            </div>

            <Newsletter />
        </div>
    )
}

export default Home