import React from "react";
import BotCard from "./BotCard";

function YourArmy ({ bots, removeBot, deleteBot }){
    const armyItem = bots.map((bot) => {
        return (
            <BotCard key={bot.id} bot={bot} clickEvent={removeBot} deleteBot={deleteBot}
            />
          )
    })

    return (
        <div className="d-block p-2 bg-dark text-black">
          <div className="container mt-4">
            <div className="row">
                {armyItem}
            </div>
          </div>
        </div>
    )
}

export default YourArmy