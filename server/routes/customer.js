const express = require("express");
const Controller = require("../controllers/controller");
const { authentication } = require("../middlewares/auth");
const customer = express.Router();

customer.post("/register", Controller.register);
customer.post("/login", Controller.login);

customer.get("/products", Controller.getAllProductVariant);
customer.get("/categories", Controller.getAllProductCategory);
customer.get("/products/:id", Controller.getAllProductVariantById)
customer.get("/all-products", Controller.getAllProduct);
// customer.post("/fisio", Controller.createFisio);
// customer.get("/fisio/:id", Controller.getFisioById);
// customer.put("/fisio/:id", Controller.updateFisio);
// customer.delete("/fisio/:id", Controller.deleteFisio);

customer.use(authentication)

customer.get("/transactions", Controller.getAllTransaction)
customer.post("/transactions", Controller.createTransaction)
// customer.get("/package", Controller.getAllPackage);
// customer.post("/package", Controller.createPackage);
// customer.get("/package/:id", Controller.getPackageById);
// customer.put("/package/:id", Controller.updatePackage);
// customer.delete("/package/:id", Controller.deletePackage);
// customer.put("/specialist/:id", Controller.up);
// customer.delete("/specialist/:id", Controller.);

// customer.get("/patient", Controller.getAllPatient);
// customer.get("/patienttoday", Controller.getAllPatientToday);

// customer.post("/patient", Controller.createPatient);
// customer.get("/patient/:id", Controller.getPatientById);
// customer.put("/patient/:id", Controller.updatePatient);
// customer.delete("/patient/:id", Controller.deletePatient);

module.exports = customer;
