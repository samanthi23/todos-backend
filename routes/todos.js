const express = require("express")
const router = express.Router()
const Todo = require("../models/todo");


// only need these 3 routes
// index route
router.get("/", function(req, res, next){
    Todo.find({})
        .then( todos => res.send(todos))
        .catch(err => next(err));
        
});

router.post("/", function(req, res, next) {
   Todo.create(req.body)
   // here we can set a status of 201
   // res.send(todos))
   // then we can send that todo that was just made
   .then(todos => res.status(201).send(todo))
   // then send that to the error handler
   .catch(err => next(err));
});

// REACT.js route to delete

router.delete("/:id", function(req, res, next){
    Todo.findByIdAndRemove(req.params.id)
    
        .then( todo => res.send(todos))
        .catch(err => next(err));
        
    /*
    // pass it whatever comes in as this id here, req.params.id, router.delete("/:id", )
    Todo.findByIdAndRemove(req.params.id)
    
        .then( todo => res.send(todos))
        .catch(err => next(err));*/
    
        
});

// so how do we know if this is working





// exports router
module.exports = router;