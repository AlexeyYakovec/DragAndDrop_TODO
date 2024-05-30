import React, { useState } from "react";
import Card from "../Card/Card";

const DEFAULT_CARDS = [
   // BACKLOG
   {
      title: "Look into render bug in dashboard",
      id: "1",
      column: "backlog",
   },
   { title: "SOX compliance checklist", id: "2", column: "backlog" },
   { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
   { title: "Document Notifications service", id: "4", column: "backlog" },
   // TODO
   {
      title: "Research DB options for new microservice",
      id: "5",
      column: "todo",
   },
   { title: "Postmortem for outage", id: "6", column: "todo" },
   { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

   // DOING
   {
      title: "Refactor context providers to use Zustand",
      id: "8",
      column: "doing",
   },
   { title: "Add logging to daily CRON", id: "9", column: "doing" },
   // DONE
   {
      title: "Set up DD dashboards for Lambda listener",
      id: "10",
      column: "done",
   },
];

export const NotionKaban = () => {
   return (
      <div className="App h-screen w-full bg-neutral-800 text-neutral-50">
         <Board />
      </div>
   );
};

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
      </div>
   );
};

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
            className={`h-full w-full transition-colors ${
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