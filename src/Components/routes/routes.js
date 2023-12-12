import Home from "../Home/Home"
import SignedPage from '../SignedPage/SignedPage'
import LoginPage from '../LoginPage/LoginPage'
import MoreInformation from '../MoreInformation/MoreInformation'
import Chargers from '../Chargers/Chargers'
import Kables from "../Kables/Kables"
import Hedphones from '../Hedphones/Hedphones'
let routes = [
    {path:'/' , element:<Home/>},
    {path:'/sign in' , element:<SignedPage/>},
    {path:'/login' , element:<LoginPage/>},
    {path:'/more information' , element:<MoreInformation/>},
    {path:'/chargers' , element:<Chargers/>},
    {path:'/kables' , element:<Kables/>},
    {path:'/hedphones' , element:<Hedphones/>},
]

export default routes