import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Users from "./pages/users/users";
import Products from "./pages/products/products";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import "./styles/global.scss";
import Sidebar from "./components/sidebar/sidebar";
import User from "./pages/users/user/User";
import Product from "./pages/products/product/Product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Orders from "./pages/orders/Orders";
import Posts from "./pages/posts/Posts";
import Post from "./pages/posts/post/post";
import Order from "./pages/orders/order/order";
import Profile from "./pages/profile/profile";
import { ToastContainer } from "react-toastify";
function App() {
  const Layout = () => {
    const queryClient = new QueryClient()
    return (
      <div className="appLayout">
        <Navbar />
        <div className="row">
          <div className="sidebarCont">
            <Sidebar />
          </div>
          <main className="container">
            <QueryClientProvider client={queryClient}>
              <Outlet />

            </QueryClientProvider>
          </main>
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/Posts",
          element: <Posts />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/orders/:id",
          element: <Order />,
        },
        {
          path: "/Posts/:id",
          element: <Post />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
      <ToastContainer />
    </>);
}

export default App;
