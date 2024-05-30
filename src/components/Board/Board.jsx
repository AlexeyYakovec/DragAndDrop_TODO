import React, { useState } from "react";

import { DEFAULT_CARDS } from "../../data/dataDB";

import Column from "../Column/Column";
import BurnBarrel from "../BurnBarrel/BurnBarrel";

const Board = () => {
   const [cards, setCards] = useState(DEFAULT_CARDS);
   return (
      <div className="flex h-full w-full gap-3 overflow-scroll p-12">
         <Column
            title="Blocklog"
            column="backlog"
            headingColor="text-emerald-200"
            cards={cards}
            setCards={setCards}
         />
         <Column
            title="TODO"
            column="todo"
            headingColor="text-emerald-200"
            cards={cards}
            setCards={setCards}
         />
         <Column
            title="In progress"
            column="doing"
            headingColor="text-emerald-200"
            cards={cards}
            setCards={setCards}
         />
         <Column
            title="Complete"
            column="done"
            headingColor="text-emerald-200"
            cards={cards}
            setCards={setCards}
         />
         <BurnBarrel setCards={setCards} />
      </div>
   );
};

export default Board;
