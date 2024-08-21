const UserModel = require("../Models/UserModels");

exports.createUser = async function (req, res, next) {
    try {
        const { name, email, password, phone } = req.body;

        // Log received data
        console.log("Received data:", { name, email, phone, password });

        await UserModel.create({ name, email, password, phone });
        res.status(201).send({ message: "User Created Successfully" });
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).send({ message: err.message });
    }
};
