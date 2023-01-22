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
        <div className="bot-army">
          <div className="five column grid">
            <div className="row bot-army-row">
                {armyItem}
            </div>
          </div>
        </div>
    )
}

export default YourArmy