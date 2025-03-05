import { ACTS } from "../controllers/userContollers.mjs";
import express from "express";

const router = express.Router();
const TABLE = "users";

// Static Routes Handling (Middleware based static routing)
export const routes = {
    "GET:/": function(req, res) {
        res.status(200).send("<p>Welcome</p>")
    },

    'GET:/members': function(req, res) {
        res.status(200).json({
            _n0: "MILIMBA Guy Kelly",
            _n1: "IGIRANEZA Yan Francesco",
            _n2: "HAKIZIMANA Martin Armand",
        });
    },

    "POST:/newUser": function(req, res) {
        let data = req.body;
        let newUser = new ACTS().createUser(data, TABLE);

        return res.status(200).json({
            message: newUser ? "Created Successfully" : "Failed to create",
            status: 200
        });
    },

    "GET:/allUsers": async function(req, res) {
        try {
            let users = await new ACTS().allUsers(TABLE);
            res.status(200).send(users);

        } catch(err) {
            console.error(err);
        } 
    }
}

// Dynamic Routes Handling
router.get("/user/:id",  (req, res) => {
    new ACTS().getUser(TABLE, req.params.id).then(rs => {
        return res.status(200).json({
            user: rs[0]
        });
    }).catch(err => {
        console.error(err);
    })
});

router.put("/user/:id",  (req, res) => {
    new ACTS().updateUser(TABLE, req.params.id, req.query).then(() => {
        return res.status(200).json({
            msg: "Updated Successfully"
        });
    }).catch(err => {
        console.error(err);
    })
});

router.delete("/user/:id",  (req, res) => {
    new ACTS().deleteUser(TABLE, req.params.id).then(() => {
        return res.status(200).json({
            msg: "Deleted Successfully"
        });
    }).catch(err => {
        console.error(err);
    })
});

export default router;

