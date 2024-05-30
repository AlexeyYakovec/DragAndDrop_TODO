import React from "react";
import DropIndicator from "../DropIndicator/DropIndicator";

const Card = ({ title, id, column, handleDragStart }) => {
   return (
      <>
         <DropIndicator beforeId={id} column={column} />
         <div
            onDragStart={(e) => handleDragStart(e, { title, id, column })}
            draggable={true}
            className="cursor-grab rounded border border-neutral-700
	 bg-neutral-800 p-3 active:cursor-grabbing mb-2"
         >
            <p className="text-sm text-neutral-100">{title}</p>
         </div>
      </>
   );
};

export default Card;
