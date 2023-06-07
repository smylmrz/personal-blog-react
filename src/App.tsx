import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider
} from "react-router-dom";
import Root from "./layout/Root.tsx";
import Home from "./views/Home.tsx";
import About from "./views/About.tsx";
import Post from "./views/Post.tsx";
import Category from "./views/Category.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path=":slug" element={<Post />} />
                <Route path="category/:slug" element={<Category />}/>
            </Route>
        </>
    )
);

function App() {
  return (
      <div>
          <RouterProvider router={router} />
      </div>
  )
}

export default App
