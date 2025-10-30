import Tactic from "../models/Tactic.js";
import fetch from "node-fetch";


export const getPlayerData = async (req, res) => {
  const tag = req.params.tag;
  console.log('Received tag:', tag);

  const response = await fetch(`https://api.clashroyale.com/v1/players/%23${tag}`, {
    headers: {
      Authorization: `Bearer ${process.env.CLASH_ROYALE_API_KEY}`,
      Accept: "application/json"
    },
  });
  console.log('Fetch Player Data Response Status:', response);
  if (!response.ok) {
    const error = await response.text();
    return res.status(response.status).send(error);
  }

  const data = await response.json();
  res.json(data);
};



export const getTactics = async (req, res) => {
  const tactics = await Tactic.find();
  res.json(tactics);
};

export const createTactic = async (req, res) => {
  const tactic = new Tactic(req.body);
  await tactic.save();
  res.status(201).json(tactic);
};
