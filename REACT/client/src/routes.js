import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Animal from './pages/Animal'
import List from './pages/List'
import Home from './pages/Home'
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE,
        ANIMAL_ROUTE, LIST_ROUTE} from './utils/consts'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: ANIMAL_ROUTE + '/:id',
        Component: Animal
    },
    {
        path: LIST_ROUTE,
        Component: List
    }
]

