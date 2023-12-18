const express = require("express");
const Controller = require("../controllers/controller");
const { authentication } = require("../middlewares/auth");
const administrator = express.Router();

// administrator.post("/register", Controller.register);
administrator.post("/login", Controller.login);

administrator.get("/products", Controller.getAllProduct);
// administrator.post("/fisio", Controller.createFisio);
// administrator.get("/fisio/:id", Controller.getFisioById);
// administrator.put("/fisio/:id", Controller.updateFisio);
// administrator.delete("/fisio/:id", Controller.deleteFisio);

// administrator.get("/times", Controller.getAllTimes);

// administrator.get("/package", Controller.getAllPackage);
// administrator.post("/package", Controller.createPackage);
// administrator.get("/package/:id", Controller.getPackageById);
// administrator.put("/package/:id", Controller.updatePackage);
// administrator.delete("/package/:id", Controller.deletePackage);
// administrator.put("/specialist/:id", Controller.up);
// administrator.delete("/specialist/:id", Controller.);

// administrator.get("/patient", Controller.getAllPatient);
// administrator.get("/patienttoday", Controller.getAllPatientToday);

// administrator.post("/patient", Controller.createPatient);
// administrator.get("/patient/:id", Controller.getPatientById);
// administrator.put("/patient/:id", Controller.updatePatient);
// administrator.delete("/patient/:id", Controller.deletePatient);

module.exports = administrator