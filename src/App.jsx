import React, { useEffect, useState } from "react";
import { getNotes, createNote, deleteNote } from "./api/api.js";
import NotesList from "./components/NotesList.jsx";
import NoteForm from "./components/NoteForm.jsx";
import SearchBar from "./components/SearchBar.jsx";
import toast, { Toaster } from 'react-hot-toast';
const App = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const fetchNotes = async () => {
    const response = await getNotes(search ? { search } : {});
    setNotes(response.data);
  };

  useEffect(() => {
    fetchNotes();
  }, [search]);

  const handleAddNote = async (note) => {
    await createNote(note);
    fetchNotes();
  };

  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id);
      fetchNotes();
      toast.success("Note Deleted Successfully", {
progress:null
});
    } catch (error) {
      console.log(error);
      toast.error("Error while deleting Note",{progress:null}, error);
    }
  };

  return (
    <div className="p-4  grid  grid-cols-6  grid-rows-6">
      <h1 className="text-3xl font-bold mb-4 col-span-3 row-span-1">
        Notes App
      </h1>
      <SearchBar search={search} setSearch={setSearch} />
      <NoteForm onAddNote={handleAddNote} />

      <NotesList notes={notes} onDeleteNote={handleDeleteNote} />
      <Toaster
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        
      />
    </div>
  );
};

export default App;
