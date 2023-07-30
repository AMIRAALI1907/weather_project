

    const express = require('express')
    const app = express()

    const port = process.env.PORT || 3000

    
    const path = require ("path")
    const publicDirectory =  path.join(__dirname , '../public')
    app.use (express.static (publicDirectory))

   

    app.get('/about', (req, res) => {
        res.send('This is data in about Page ')
       })

    

    app.set('view engine', 'hbs');

      const viewsDirectory = path.join (__dirname , "../temp1/views" )
      app.set( "views" , viewsDirectory)

     

      var hbs = require ('hbs')

      const partialsPath = path.join (__dirname , "../temp1/partials")

      hbs.registerPartials(partialsPath)

    app.get('/' , (req , res) => {
        res.render('index' , {
            title: " Welcome To HOME Page",
            
        })
    })

    app.get('/weathercheck' , (req , res) => {
        res.render('weathercheck' , {
            title : "check Weather page",
            latitude: " 15.085593",
            longtitude: "120.886403",
            country: "canda",
            status:"clear",
            temperature : "25"
        })
    })

  


    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
    

