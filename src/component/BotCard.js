import React from "react";

const botTypeClasses = {
    Assault: "icon military",
    Defender: "icon shield",
    Support: "icon plus circle",
    Medic: "icon ambulance",
    Witch: "icon magic",
    Captain: "icon star",
  };

function BotCard({bot, clickEvent, deleteBot}){
    return(
        <div className="column">
            <div className="key1" key={bot.id} onClick={() => clickEvent(bot)}>
                <div className="image">
                    <img alt="oh no!" src={bot.avatar_url}/>
                </div>
                <div className="content">
                    <div className="header">
                       Name: {bot.name}
                        <i className={botTypeClasses[bot.bot_class]}/>
                    </div>
                    <div className="meta text-wrap">
                       Catchphrase: <small>{bot.catchphrase}</small>
                    </div>
                </div>
                <div className="extra content">
                    <p>
                        <i className="icon heartbeat"/>
                        Health: {bot.health}
                    </p>

                    <p>
                        <i className="icon lightning"/>
                       Damage: {bot.damage}
                    </p>

                    <p>
                        <i className="icon shield"/>
                        Armor: {bot.armor}
                    </p>
                    
                    <p>
                        <div>
                            <button onClick={(event) => {event.stopPropagation();deleteBot(bot);}}>X</button>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BotCard