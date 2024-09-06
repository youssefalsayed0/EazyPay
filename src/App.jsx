
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Register from './components/Register.jsx/Register';
import Login from './components/Login/Login';

export default function App() {

    const router = createBrowserRouter([
      {
        path: "",element: <Layout />,
        children: [
          { index: true, element: <Home/> },
          { path: "home", element: <Home/> },
          { path: "contact", element: <Contact/> },
          { path: "about", element: <About /> },
          { path: "register", element: <Register /> },
            { path: "login", element: <Login /> },
        //   { path: "brands", element: <Brands /> },
        //   { path: "categories/:name", element: <CategoryProducts /> },
        //   { path: "brands/:name", element: <BrandProducts /> },
        //   { path: "productdetails/:id", element: <ProductDetails /> },
        //   {
        //     path: "wishlist",
        //     element: (
        //       <ProtectedRoute>
        //         <WishList />
        //       </ProtectedRoute>
        //     ),
        //   },
        //   {
        //     path: "cart",
        //     element: (
        //       <ProtectedRoute>
        //         <Cart />
        //       </ProtectedRoute>
        //     ),
        //   },
          { path: "*", element: <NotFound/> },
        ],
      },
    ]);
     
 
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}


