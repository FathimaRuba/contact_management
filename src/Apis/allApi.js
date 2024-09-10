import axios from "axios"
const base_url = 'https://contact-server-vjwc.onrender.com'

export const addContact = async(data) => {
    return await axios.post(`${base_url}/contacts`,data)
}

export const getContact = async() => {
    return await axios.get(`${base_url}/contacts`)
}

export const getUniqueContact = async(id) => {
    return await axios.get(`${base_url}/contacts/${id}`)
}

export const updateContact=async(id,data)=>{
    return await axios.put(`${base_url}/contacts/${id}`,data)
}

export const delContact = async(id) => {
    return await axios.delete(`${base_url}/contacts/${id}`)
}

export const addCategory = async(data) => {
    return await axios.post(`${base_url}/category`,data)
}

export const getCategory = async() => {
    return await axios.get(`${base_url}/category`)
}

export const delCategory = async(id) => {
    return await axios.delete(`${base_url}/category/${id}`)
}

export const updateCategory=async(id,data)=>{
    return await axios.put(`${base_url}/category/${id}`,data)
}

export const registerApi = async(data) => {
    return await axios.post(`${base_url}/users`,data)
}

export const checkEmail=async(email)=>{
    return await axios.get(`${base_url}/users?email=${email}`)
}

export const loginApi = async(email,password)=>{
    return await axios.get(`${base_url}/users?email=${email}&password=${password}`)
}