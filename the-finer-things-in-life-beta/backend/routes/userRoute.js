import express, { response } from "express";
import mongoose from "mongoose";
import { Users } from "../models/userModel.js";
import { Merchandise } from "../models/merchandiseModel.js";
const userRoute = express.Router();
// Route for create user
userRoute.post("/createUser", async (request, response) => {
  try {
    if (
      !request.body.firstName ||
      !request.body.lastName ||
      !request.body.username ||
      !request.body.email ||
      !request.body.password ||
      !request.body.age
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: firstName, lastName, username, password, age, email",
      });
    }
    
    const newUser = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      username: request.body.username,
      email: request.body.email,
      password: request.body.password,
      age: request.body.age,
    };

    const user = await Users.create(newUser);

    return response.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a user
userRoute.put("/editUser/:id", async (request, response) => {
  const { id } = request.params;
  const { password } = request.body;
  
  let existingUser;
  let updateUser;

  try {
    existingUser = await Users.findById(id);
console.log(password);

    if (existingUser.password === password) {
      updateUser = await Users.findByIdAndUpdate(id, request.body);

      return response.status(200).json({ message: "Update Successful" });
    } else {
      return response.status(401).json({ message: "Credentials do not match" });
    }
  } catch (error) {
    console.log(error);
  }
});

userRoute.delete("/deleteUser/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Users.findByIdAndDelete(id);

    if (!result) {
      console.log("no hit");
      return response.status(404).json({ message: "User not found" });
    }

    return response.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
});

// Route for the cart
userRoute.post("/cart", async (request, response) => {
  let { username, _id } = request.body;
  let currentUser;
  let product;
  try {
    currentUser = await Users.findOne({ username });
    product = await Merchandise.findById({ _id: _id }).lean();
    product.quantity = 1;
    if (!currentUser.cart.length > 0) {
      currentUser.cart = [...currentUser.cart, product];
    } else {
      const alreadyAdded = currentUser.cart.find(
        (x) => x._id.toString() === _id
      );

      if (!alreadyAdded) {
        currentUser.cart = [...currentUser.cart, product];
      } else {
        Object.assign(alreadyAdded, {
          ...alreadyAdded,
          quantity: alreadyAdded.quantity + 1,
        });
        await Users.findOneAndUpdate({ username }, { cart: currentUser.cart });
        return response.status(201).send({ user: currentUser });
      }
    }
    const saveCurrentUser = await currentUser.save();

    response.status(201).send({ user: saveCurrentUser });
  } catch (error) {
    response.send({ message: error.message });
  }
});
// Delete items from cart
userRoute.delete("/cart/:id", async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  let existingUser;

  try {
    existingUser = await Users.findById(userId);
    console.log(existingUser);
    const newCart = existingUser.cart.filter((item) => item._id != id);
    console.log(newCart);
    existingUser.cart = newCart;
    const saveExistingUser = await existingUser.save();
    if (!existingUser) {
      return res.status(404).json({ message: "Merchandise not found" });
    }

    return res.status(200).send({
      message: "Merchandise deleted successfully",
      user: existingUser,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// post to find a user with a username and pass that matches the req.body
userRoute.post("/findUser", async (req, res) => {
  let { username, password } = req.body;

  let existingUser;
  try {
    existingUser = await Users.findOne(
      { username: username, password: password },
      { password: 0 }
    );
    // console.log(existingUser);
  } catch (err) {
    console.log({ message: err });
  }
  if (!existingUser) {
    return res.status(400).json({
      success: false,
      data: { message: "Credentials do not match" },
    });
  }
  return res.status(200).json({
    success: true,
    data: existingUser,
  });
});
export default userRoute;
