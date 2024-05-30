import React, { useState } from "react";

import { GoPlus } from "react-icons/go";

const AddCard = ({ column, setCards }) => {
   const [text, setText] = useState("");
   const [adding, setAdding] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!text.trim().length) {
         return;
      }

      const newCard = {
         column,
         title: text.trim(),
         id: Math.random().toString(),
      };

      setCards((cards) => [...cards, newCard]);
      setAdding(false);
   };

   return (
      <>
         {adding ? (
            <form onSubmit={handleSubmit}>
               <textarea
                  autoFocus
                  placeholder="Add new task..."
                  className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
                  onChange={(e) => setText(e.target.value)}
               />
               <div className="mt-1.5 flex items-center justify-end gap-1.5">
                  <button
                     className="px-3 py-1.5 text-xs text-neutral-400 translate-colors hover:text-neutral-50"
                     onClick={() => setAdding(false)}
                  >
                     close
                  </button>
                  <button
                     type="submit"
                     className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 translate-colors hover:bg-neutral-300"
                  >
                     Add <GoPlus />
                  </button>
               </div>
            </form>
         ) : (
            <button
               className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
               onClick={() => setAdding(true)}
            >
               Add card
               <GoPlus />
            </button>
         )}
      </>
   );
};

export default AddCard;
