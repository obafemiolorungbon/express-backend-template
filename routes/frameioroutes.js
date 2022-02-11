const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseID = process.env.NOTION_DATABASE_ID;

// logic for routing goes here

router.get("/", (req, res, next) => {
  console.log("Route Connected");
  res.send({ success: true });
});

module.exports = router;
