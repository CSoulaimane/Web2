var express = require('express');
var router = express.Router();

    const MOOVIES =
    [
        {
        id : 1,
        title : "Batman",
        duration : "230",
        budget : "1.5m",
        link : "oeoeoe",
        },
        {
        id : 2,
            title : "Batman2",
            duration : "240",
            budget : "1.5m",
            link : "oeoeoe",
            },
            {
                id : 3,
                title : "Batman3",
                duration : "230",
                budget : "1.5m",
                link : "oeoeoe",
                }




    ]





    router.get('/', (req, res, next) => {
        let duration;
        let query=req.query['minimum-duration'];
        let array=[];

        if(query){
            console.log("il y a duration : "+ query)
           duration= query;

           MOOVIES.forEach((element, index) => {
            console.log(element.duration  +duration)
                if(element.duration ===  duration){
                    console.log( array.push(element));
                }
        });
        
        res.json(array);
        }
        else  {  
          res.json(MOOVIES);
         
          console.log("cii = "+ req.query.minimum);
        }

      });

      router.get('/:id', (req, res, next) => {
        console.log("requete avec id ")
        let id =req.params.id

        if (id <= 0 || id >MOOVIES.length) return res.sendStatus(404);

       res.json( MOOVIES.find((moovie)=>moovie.id==id));


      });


      router.post('/', (req, res, next) => {
        console.log("requete post moovie ")

        let title =req.body.title;
        let duration =req.body.title;
        let budget =req.body.title;
        let link  =req.body.title;
        
        let lastIndex;


      });
    module.exports =router;
