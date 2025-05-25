
import {TitlePage} from "./views/Title"
import Homepage from './views/HomepageApp'

import {createBrowserRouter, RouterProvider, createHashRouter, createRoutesFromElements, Route} from 'react-router-dom'
import MyGames from "./views/MyGames"




const router = createBrowserRouter(
createRoutesFromElements(
    <>
	<Route path="/" element={<TitlePage/>}/>,
	<Route path="/home" element={<Homepage/>}>
        <Route path="games" element={<MyGames/>}/>
    </Route>
    </>
)
)

export default function App() {
    return (
        <>
        <RouterProvider router={router}/>
        </>
    )
}
