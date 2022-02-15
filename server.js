//This file houses the API code and it'll require express and mongodb
const express = require("express")
const mongo = require('mongodb'). MongoClient

// intialize the express app
const app = express()

//Now we add the stubs and skeletons for API endpoints we support

 //Client way to add the trip using post/trip method 
    app.post("/trip", (req, res) => {
        //access data by referencing from the Request body
        const name = req.body.name
        // we insert data into the db using the trips.insertOne()
        trips.insertOne({name: name},(err, result) =>{
              if(err){
                  console.log(err)
                  res.status(500).json({err: err})
                  return
              }
              console.log(result)
              res.status(200).json({ok: "true"})

        })

    })
    // getting the list
     app.get("/trips", (req, res) => {
          trips.find().toArray((err, items)=>{
              if(err){
                console.log(err)
                res.status(500).json ({err: err})
                return
              }
              res.status(200).json({trips: items})
          })
    })
    //
    app.post("/expense", (req, res) => {
        expenses.insertOne()

    })
    app.get("/expenses", (req, res) => {

    })
    // Now we use the listen method on the app to start our server
  app.listen(3000, ()=>console.log("server is listening"))

  // We build the mongodb server URL 27017 is our default port
     const url = "mongodb://localhost:27017"

     //we connect to the db using the connect() method
     // define variable
      let db,trips,expenses

      //do a connction. Also we get a reference to the trips and expenses collection
       mongo.connect(
            url, 
            {
              useNewUrlParser:true,
              useUnifiedTopology: true,
            },
            (err, client)=>{
                if(err){
                    console.log(err)
                    return
                }
          db= client.db("tripcost")
          trips= db.collection("trips")
          expenses= db.collection("expenses")
            }
       )
  // Since we  expect the data in coming as JSON, we use the express.json middleware
       app.use(express.json())
    

    

     
    

