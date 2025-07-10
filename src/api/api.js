import axios from 'axios';

const API_URL =import.meta.env.MODE ==="development"?"http://localhost:5000/notes":"/notes" ;

export const getNotes = async (params = {}) => await axios.get(API_URL, { params });
export const createNote = async (note) => await axios.post(API_URL, note).then();
export const deleteNote = async (id) => {
    await axios.delete(`${API_URL}/${id}`)};

// export const getNoteData=async(id)=>{
//     console.log(id ,'id from api.js')
//     await axios.get(`${API_URL}/edit`,{id})
// }
// export const updateNote=async(id,params)=>{
//     console.log(id,params)
//     await axios.post(`${API_URL}/edit/${id}`,{params})
// }