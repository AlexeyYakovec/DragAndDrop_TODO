import React, { useState } from "react";
import Card from "../Card/Card";

const Column = ({ title, headingColor, column, cards, setCards }) => {
   const [active, setActive] = useState(false);

   const filteredCards = cards.filter((card) => {
      return card.column === column;
   });

   return (
      <div className="w-56 shrink-0">
         <div className="mb-3 flex items-center self-start ">
            <h3 className={`font-medium ${headingColor} mr-6`}>{title} :</h3>
            <span className="rounded text-sm text-neutral-400">
               {filteredCards.length}
            </span>
         </div>
         <div
            className={`h-full w-full transition-colors  ${
               !active ? "bg-neutral-700/30" : "bg-neutral-800/0"
            }`}
         >
            {filteredCards.map((card) => {
               return <Card key={card.id} title={card.title} />;
            })}
         </div>
      </div>
   );
};

export default Column;
