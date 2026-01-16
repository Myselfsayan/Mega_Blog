import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { AuthLayout } from './components/index.js'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import AllPost from './pages/AllPost.jsx'
import AddPost from './pages/AddPost.jsx'
import Editpost from './pages/Editpost.jsx'
import Post from './pages/Post.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element = {<App />}>
      <Route path ='' element = {<Home/>} />
      <Route path ='/login' element = {<AuthLayout authentication={false}><Login/></AuthLayout>}/>
      <Route path ='/signup' element = {<AuthLayout authentication={false}><Signup/></AuthLayout>}/>
      <Route path ='/all-posts' element = {<AuthLayout authentication={true}> {""}<AllPost/></AuthLayout>}/>
      <Route path ='/add-post' element = {<AuthLayout authentication={true}>{""}<AddPost/></AuthLayout>}/>
      <Route path ='/edit-post/:slug' element = {<AuthLayout authentication={true}>{""}<Editpost/></AuthLayout>}/>
      <Route path ='/post/:slug' element = {<Post/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
