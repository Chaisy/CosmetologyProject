import {$authHost, $host} from './index'
import {jwtDecode} from 'jwt-decode'

export const registration = async (username, email, password) => {
    try {
        const {data} = await $host.post('api/user/registration', {username, email, password})
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)
    } catch (e) {
        console.log(e.message)
    }
}

export const login = async (username, password) => {
    try {
        const {data} = await $host.post('api/user/login', {username, password})
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)
    } catch (e) {
        console.log(e.message)
    }
}

export const check = async () => {
    try {
        const {data} = await $authHost.get('api/user/auth')
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)
    } catch (e) {
        console.log(e.message)
    }   
}