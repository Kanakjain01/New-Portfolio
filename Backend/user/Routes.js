const express = require("express");
const { createUserFunc } = require("./Controller");
// bro abhi tk controller file bni nhi usme funciton bna nhi toh kaise import kr rhe ho fir error aayega

const UserSchema = require("./UserSchema");
const router = express.Router();
router.post("/createuser", createUserFunc);

module.exports = router;


// isko check krlo