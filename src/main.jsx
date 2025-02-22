import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router';
import Home from './components/Home/Home.jsx';
import Root from './components/Root/Root.jsx';
import Error from './components/Error/Error.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import BooksDetails from './components/Books/BooksDetails.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import { ToastContainer } from 'react-toastify';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "book/:bookId",
          // loader: ({ params }) => fetch(`https://jsonplaceholder.org/users/${params.id}`),
          loader: () => fetch('/data/booksData.json'),
          element: <BooksDetails />
        },
        {
          path: "dashboard",
          element: <Dashboard />
        },
        {
          path: "/listed-books",
          element: <ListedBooks />,
          loader: () => fetch('/data/booksData.json')
        }
      ]
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
