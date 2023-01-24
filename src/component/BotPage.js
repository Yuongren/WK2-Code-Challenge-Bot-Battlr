import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourArmy from "./YourBotArmy";


function BotPage() {
  const [bots, setBots] = useState([]);

  function fetchData() {
    return fetch(`https://youngren.vercel.app/bots`)
      .then((resp) => resp.json())
      .then((data) => {
        setBots(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);



  function enlistBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: true } : b)));
  }

  function removeBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: false } : b)));
  }

  function deleteBot(bot) {
    const deletedBot = bots.filter((b) => b.id !== bot.id);
    setBots((bots) => deletedBot);
  }
  return (
    <div>
      <YourArmy bots={bots.filter((b) => b.army)} removeBot={removeBot} deleteBot={deleteBot} />
      <BotCollection bots={bots} enlistBot={enlistBot} deleteBot={deleteBot} />
    </div>
  );
}

export default BotPage;