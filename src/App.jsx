import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import RootLayout from "./sections/layout/RootLayout";
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Feature from "./sections/feature/Feature";
import Project from "./sections/project/Project";
import Blog from "./sections/blog/Blog";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/feature" element={<Feature/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Route>
    )
  );

  return (
    <RouterProvider
    router={router}
  />
  )
}

export default App
