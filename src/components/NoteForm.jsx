import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      onAddNote({
        title,
        content,
        tags: tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag),
      });
      setTitle("");
      setContent("");
      setTags("");
      toast.success("Note Created Successfully",{progress:null});
    } catch (error) {
      console.log(error);
      toast.error("Error while creating Note",{progress:null}, error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 grid-cols-subgrid grid-rows-subgrid col-span-3 lg:col-span-2 row-span-2"
    >
      <input
        className="block w-full mb-2 p-2 border outline-0"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="block w-full mb-2 p-2 border outline-0"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        className="block w-full mb-2 p-2 border ouline-0"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        type="submit"
      >
        Add Note
      </button>
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
    </form>
  );
};

export default NoteForm;
