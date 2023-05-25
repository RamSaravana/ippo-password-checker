const router = require("express").Router();

const Auth = require("../model/AuthModel");

const saveCreds = async (req, res) => {
  const newCred = new Auth(req.body);
  try {
    const credentials = await newCred.save();
    res.status(200).json(credentials);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { saveCreds };
