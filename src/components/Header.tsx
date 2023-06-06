import Navigation from "./Navigation.tsx";

function Header() {
    return (
        <header className="py-5 lg:pt-12 bg-blue-50">
            <div className="space-y-20 container mx-auto">
                <Navigation />

                <div className="hidden lg:flex">
                    <img className="-mb-7 w-40" src="/hero-avatar.png" alt=""/>
                    <h2 className="mt-5 text-lg font-medium leading-6">
                        Learning is a daily thing, wisdom an endless pursuit. <br/>
                        You never arrive, you never fill up, you never graduate.
                    </h2>
                </div>
            </div>

        </header>
    )
}

export default Header