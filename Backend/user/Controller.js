const { request } = require("express");
const UserSchema = require("./UserSchema");

const createUserFunc = async (request, response) => {
  // acha aadhe m poora likha h aadhe m aadha isliye?? au rkkya  kro sahi
  try {
    console.log("namam");
    const { name, email, message } = request.body;
    // console.log(user_response) // user_response variable niche h aur print hum phle kra rh eh iss line user_response jaisi koi chiz nhi h ok ab kya krna h /kuch nhi bn gya ab iss api ko link kr de  cotact form se kaise chatgpt se dekh error aaye toh bta baaki khud reserver krlo
    const user_response = await UserSchema.create({
      name: name,
      email: email,
      message: message,
    });
    // y poori line h ek hi aur user_repsonse tune print kraya tha user_response milne se phle toh caall p bta ese hi smj le yrr phn andar h
    if (user_response) {
      return response.status(201).json({
        status: 201,
        message: "user created",
        data: user_response,
      });
    }
    return response.status(402).json({
      status: 402,
      message: "unable to create",
    });
  } catch (error) {
    return response.status(500).json({
      status: 500,
      message: "server error" + error,
    });
  }
};

module.exports = { createUserFunc };
