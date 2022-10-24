import Admin from "../models/admin.js";

export const findAdminById = async (req, res) => {
    try {
        const admin = await Admin.findOne({ _id: req.params.id });
        res.status(200).send(admin);
    } catch (error) {
        res.status(404).send("Cannot get data !");
    }
};

export const findAllAdmins = async (req, res) => {
    try {
        const admin = await Admin.find();
        res.status(200).send(admin);
    } catch (error) {
        res.status(404).send("Cannot get data !");
    }
};

export const addAdmin = (req, res) => {
    try {
        const newAdmin = new Admin({
            name: req.body.name,
            email: req.body.email,
            mobileNo: req.body.mobileNo,
        });
        newAdmin
            .save()
            .then(() => {
                res.send("data saved!");
            })
            .catch((error) => {
                res.send(`data not saved ${error}`);
            });
    } catch (error) {
        res.status(404).send("Cannot add data !");
    }
};

export const updateAdminById = async (req, res) => {
    try {
        const admin = await Admin.findOne({ _id: req.params.id });
        Object.assign(admin, req.body);

        admin
            .save()
            .then(() => {
                res.send("data updated!");
            })
            .catch((error) => {
                res.send(`update error : ${error}`);
            });
    } catch (error) {
        res.status(404).send(`update error : ${error}`);
    }
};

export const deleteAdminById = (req, res) => {
    try {
        Admin.findByIdAndDelete(req.params.id)
            .then(() => {
                res.status(200).send("data deleted!");
            })
            .catch((error) => {
                res.status(404).send(`delete error : ${error}`);
            });
    } catch (error) {
        res.status(404).send(`delete error : ${error}`);
    }
};
