function Newsletter() {
    return (
        <div className="flex lg:grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-8 space-y-10">
                <div className="space-y-5">
                    <h2 className="font-bold text-2xl text-blue-400">
                        You haven't subscribed yet?!
                    </h2>
                    <p className="text-lg">
                        My goal with this blog is to create helpful content for front-end web devs, and my newsletter is no different! I'll let you know when I publish new content, and I'll even share exclusive newsletter-only content now and then.
                    </p>

                    <h3 className="font-medium text-lg text-blue-400">
                        No spam, unsubscribe at any time.
                    </h3>
                </div>

                <form action="" className="flex flex-col lg:flex-row gap-3">
                    <div className="space-y-2">
                        <div>Your name</div>
                        <input type="text" className="w-full outline-none focus:border-blue-400 duration-200 border-2 py-1.5 px-3 rounded-lg"/>
                    </div>
                    <div className="space-y-2">
                        <div>Your email</div>
                        <input type="email" className="w-full outline-none focus:border-blue-400 duration-200 border-2 py-1.5 px-3 rounded-lg"/>
                    </div>
                    <button className="px-4 duration-200 py-3 lg:py-1 font-medium hover:bg-blue-400 bg-blue-300 rounded-lg">
                        Join the club
                    </button>
                </form>
            </div>

            <div className="hidden lg:block col-span-4">
                <img className="rotate-0" src="/newsletter-avatar.png" alt=""/>
            </div>
        </div>
    )
}

export default Newsletter