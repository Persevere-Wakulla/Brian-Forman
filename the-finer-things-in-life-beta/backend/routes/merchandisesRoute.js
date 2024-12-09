import express from "express";
import { Merchandise } from "../models/merchandiseModel.js"

const router = express.Router();

// Route for Save  new merchandise
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.image ||
      !request.body.price ||
      !request.body.category ||
      !request.body.details
    ) {
      return response.status(400).send({
        message: "Send all required fields: name, image, price, category, details",
      });
    }
    const newMerchandise = {
      name: request.body.name,
      image: request.body.image,
      price: request.body.price,
      category: request.body.category,
      details: request.body.details,
    };

    const merchandise = await Merchandise.create(newMerchandise);

    return response.status(201).send(merchandise);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for get All merchandises from database
router.get("/", async (request, response) => {
  try {
    const merchandises = await Merchandise.find({});

    return response.status(200).json({
      count: merchandises.length,
      data: merchandises,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for get All merchandises from database by Id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const merchandise = await Merchandise.findById(id);

    return response.status(200).json(merchandise);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a merchandise
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.image ||
      !request.body.price ||
      !request.body.category ||
      !request.body.details
    ) {
    
      return response.status(400).send({
        message: "Send all required fields: name, image, price, category, details",
      });
    }

    const { id } = request.params;

    const result = await Merchandise.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Merchandise not found" });
    }

    return response.status(200).send({ message: "Merchandise updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a merchandise
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Merchandise.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Merchandise not found" });
    }

    return response.status(200).send({ message: "Merchandise deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
