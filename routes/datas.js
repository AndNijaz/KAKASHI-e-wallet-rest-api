const express = require("express");
const router = express.Router();
const User = require("../models/user");
// const user = require("../models/user");

//Getting all
router.get("/", async (req, res) => {
 try {
    const users = await User.find();
    res.json(users);
 } catch(err){
    res.status(500).json({message: err.message});
 }
})

//Gettiong one
router.get("/:id", getUser, (req, res) => {
    res.json(res.user);
});

//Creating one
router.post("/", async (req, res) => {
    // const userr = new user({
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        creditCard: req.body.creditCard,
        movements: req.body.movements

    });
    
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch(err){
        res.status(400).json({message: err.message});
    };
});

//Updating one
router.patch("/:id", getUser, async (req, res) => {
    if(req.body.firstName != null){
        res.user.firstName = req.body.firstName;
    }
    if(req.body.lastName != null){
        res.user.lastName = req.body.lastName;
    }
    if(req.body.email != null){
        res.user.email = req.body.email;
    }
    if(req.body.username != null){
        res.user.username = req.body.username;
    }
    if(req.body.password != null){
        res.user.password = req.body.password;
    }
    if(req.body.creditCard != null){
        res.user.creditCard = req.body.creditCard;
    }
    if(req.body.movements != null){
        res.user.movements = req.body.movements;
    }
    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch(err){
        res.status(400).json({message: err.message});
    }
});

//Deleting one
router.delete("/:id", getUser, async (req, res) => {
    try {
        await res.user.remove();;
        res.json({message: "Deleted user"})
    } catch(err){
        res.status(500).json({message: err.message});
    }
});

async function getUser(req, res, next){
    let user;
    try {
        user = await User.findById(req.params.id);
        if(user == null) {
            return res.status(404).json({message: "Cannot find user"});
        }
    } catch(err){
        return res.status(500).json({message: err.message});
    }

    res.user = user;
    next();
}

module.exports = router;

