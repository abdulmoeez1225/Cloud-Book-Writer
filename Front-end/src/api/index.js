import axios from "axios"
import { setUserAccessTokenLocalStorage, setUserLocalStorage } from "../utils"

export const getDynamicMenuApi = async () => {
    return await new Promise((resolve, reject) => {
        axios.get('http://localhost:3001/menu').then(res => {
            resolve(res.data,)
        }).catch(error => {
            reject(error)
        })
    })

}

export const signUpApi = async (payload) => {
    return await new Promise((resolve, reject) => {
        axios.post('http://localhost:3001/users',payload).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject(error)
        })
    })
}

export const signInApi = async (payload) => {
    return await new Promise((resolve, reject) => {
        axios.post('http://localhost:3001/signin',payload).then(res => {
            setUserLocalStorage(res.data.user)
            setUserAccessTokenLocalStorage(res.data.accessToken)
            resolve(res.data)
        }).catch(error => {
            reject(error)
        })
    })
}

export const logout = async () => {
    localStorage.clear()

  
}

export const createBooks = async(payload)=>{
    return await new Promise((resolve, reject) => {
        axios.post('http://localhost:3001/books',payload).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject(error)
        })
    })
}

export const updateBooks = async(id,payload)=>{
    return await new Promise((resolve, reject) => {
        axios.put(`http://localhost:3001/books/${id}`,payload).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject(error)
        })
    })
}

export const getBookList = async(payload)=>{
    return await new Promise((resolve, reject) => {
        axios.get('http://localhost:3001/books',payload).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject(error)
        })
    })
}


export const getBookById = async(id)=>{
    return await new Promise((resolve, reject) => {
        axios.get(`http://localhost:3001/books/${id}`).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject(error)
        })
    })
}

export const getAllUserApi = async()=>{
    return await new Promise((resolve, reject) => {
        axios.get(`http://localhost:3001/users`).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject(error)
        })
    })
}