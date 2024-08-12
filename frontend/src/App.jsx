import { lazy, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Blogs from "./pages/dashboard/blogs/Blogs";
import CreateBlog from "./pages/dashboard/create-blog/CreateBlog";
import CreateUser from "./pages/dashboard/create-user/CreateUser";
import ManageUser from "./pages/dashboard/manage-user/ManageUser";

const Home = lazy(() => import("./pages/home/Home"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Login = lazy(() => import("./pages/login/Login"));
const Auth = lazy(() => import("./pages/auth/Auth"));

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to={"./login"} replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Auth />}>
                    <Route path="dashboard" element={<Dashboard />}>
                        <Route path="manageBlogs" element={<Blogs />} />
                        <Route path="createBlog" element={<CreateBlog />} />
                        <Route path="createUser" element={<CreateUser />} />
                        <Route path="manageUser" element={<ManageUser />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
