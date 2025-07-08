// import {
//   updateNote,
//   getNoteData,
// } from "../../../React_Notes_Backend/controllers/notesController";
// import { useParams } from "react-router";
// import { useState,useEffect } from "react";
// import toast, { Toaster } from 'react-hot-toast';

// export function EditNote() {
//   let params = useParams();
//   let id = params.id;
// console.log(id, "id from edit page")
//   let noteData = {
//     title: "",
//     content: "",
//     tags: "",
//   };
// useEffect(() => {
//   noteData= getNoteData(id)


// })


//   const [updatedNoteData, setUpdatedNoteData] = useState({
//     title: noteData.title,
//     content: noteData.content,
//     tags: noteData.tags,
//   });

//   async function handleSubmit(e){
//     e.preventDefault()
//     try{
//         updateNote({
//         title:updatedNoteData.title,
//         content:updatedNoteData.content,
//         tags: updatedNoteData.tags
//           .split(",")
//           .map((tag) => tag.trim())
//           .filter((tag) => tag),
//         })
//         toast.success("Note Created Successfully",{progress:null});
//     }
//     catch(error){
//         console.log(error);
//       toast.error("Error while creating Note",{progress:null}, error);
//     }
//   }
//   return (
//     <form
//     onSubmit={handleSubmit}
//       className="mb-4 grid-cols-subgrid grid-rows-subgrid col-span-3 lg:col-span-2 row-span-2"
//       >
//         <label>Title</label>
//          <input
//         type="text"
//         id="messageInput"
//         value={updatedNoteData.title}
//         onChange={(e) => setUpdatedNoteData({...updatedNoteData, [e.target.name]: e.target.value})}
//         placeholder={updatedNoteData.title}
//       />
//        <label>Content</label>
//          <input
//         type="text"
//         id="messageInput"
//         value={updatedNoteData.content}
//         onChange={(e) => setUpdatedNoteData({...updatedNoteData, [e.target.name]: e.target.value})}
//         placeholder={updatedNoteData.content}
//       />
//        <label>Title</label>
//          <input
//         type="text"
//         id="messageInput"
//         value={updatedNoteData.tags}
//         onChange={(e) => setUpdatedNoteData({...updatedNoteData, [e.target.name]: e.target.value})}
//         placeholder={updatedNoteData.tags}
//       />
//           <button
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//         type='submit'
//       >
//         Edit Note
//       </button>
//       <Toaster/>
//     </form>
//   )
// }
