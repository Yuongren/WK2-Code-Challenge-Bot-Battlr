import React from "react";

const botTypeClasses = {
    Assault: "icon military",
    Defender: "icon shield",
    Support: "icon plus circle",
    Medic: "icon ambulance",
    Witch: "icon magic",
    Captain: "icon star",
  };

function BotSpecs (bot){
    return (
        <div>
            <div className="row">
                <div className="four wide column">
                    <img alt="oh no!"/>
                </div>
                <div className="four wide column">
                    <h2>Name: {bot.name}</h2>
                    <p>
                        <strong>catchphrase: </strong>
                        {bot.catchphrase}
                    </p>
                    <strong>
                        class: {bot.bot_class}
                        <i className={botTypeClasses[bot.bot_class]}/>
                    </strong>
                    <br/>
                    <div className="three column centered grid">
                        <div className="row">
                            <div className="column">
                                <i className="icon large circular red heartbeat"/>
                                <strong>{bot.health}</strong>
                            </div>
                            <div className="column">
                                <i className="icon large circular yellow lightning"/>
                                <strong>{bot.damage}</strong>
                            </div>
                            <div className="column">
                                <i className="icon large circular blue shield"/>
                                <strong>{bot.armor}</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() =>  console.log("connect this to a function that shows all bots")}>Go Back</button>
                <button onClick={() => console.log("connect this to a function that adds this bot to your bot army list")}>Enlist</button>
            </div>
        </div>
    )
}

export default BotSpecs