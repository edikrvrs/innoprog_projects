import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import {useContext, useEffect} from 'react'
import {Context} from './main'
import AllProjects from './pages/AllProjects'
import Project from './pages/Project'
import CheckPoint from './pages/CheckPoint'
import {observer} from 'mobx-react-lite'



function App() {
    const routers = [
        {
            path: "/",
            element: <Navigate to="/projects"/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        },
        {
            path: "/projects",
            element: <AllProjects/>
        },
        {
            path: "/projects/:projectId",
            element: <Project/>
        },
        {
            path: "/projects/:projectId/:checkPointId",
            element: <CheckPoint/>
        },
        {
            path: "*",
            element: <Navigate to="/projects"/>
        }
    ]
    const {store} = useContext(Context)
    const router = createBrowserRouter(routers)
    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }
    }, [])
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default observer(App);
