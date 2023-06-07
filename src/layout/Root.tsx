import Header from "../components/Header.tsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.tsx";

function Root() {
    return (
        <div>
            <Header/>

            <main>
                <Outlet/>
            </main>

            <Footer/>
        </div>
    );
}

export default Root;