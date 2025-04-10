import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App'
import Home from './components/Home'
import BrowseBooks from './components/BrowseBooks'
import AddBook from './components/AddBook'
import BookDetail from './components/BookDetail'
import NotFound from './components/NotFound'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> }, 
      { path: 'browse-books', element: <BrowseBooks /> }, 
      { path: 'add-book', element: <AddBook /> }, 
      { path: 'book-details/:id', element: <BookDetail /> }, 
    ],
    errorElement: <NotFound />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
)

