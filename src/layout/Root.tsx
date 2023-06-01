import Header from "../components/Header.tsx";
import { Outlet } from "react-router-dom";

function Root() {
    return (
        <div>
            <Header/>

            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Root;