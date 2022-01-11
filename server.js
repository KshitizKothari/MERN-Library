var express = require('express');
var app=express();
var bodyParser=require('body-parser');
const mongoose = require('mongoose');
// var cors=require('cors');


var db= mongoose.connect("mongodb://localhost:27017/library");

var Book=require('./model/book');
var Shelf=require('./model/shelf');

var ObjectId = mongoose.Types.ObjectId;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// app.use(cors());


app.delete('/book/delete', function(req,res){
    const id = req.body.id;
    console.log(id);

    Book.remove({_id:id},(err,result)=>{
        if(err)
        {
            console.log(err);
            res.status(500).send(err);
        }
        else{
            res.status(200).json({msg:"successfully deleted"});
        }
    })
})

app.post('/book', function(request,response){
    var book= new Book();
    book.title = request.body.title;
    book.author = request.body.author;
    book.genre = request.body.genre;
    book.price = request.body.price;
    book.save(function(err, savedBook){
        if(err){
            response.status(500).send({error:'Could not save Book'});
        }
        else{
            response.send(savedBook);
        }
    });
});


app.get('/book', function(request, response){
    Book.find({}, function(err, books){
        if(err){
            response.status(500).send({error:"Oops Sorry.. books could not be fetched"});
        }
        else{
            response.send(books);
        }
    });
});

app.get('/book/id', function(request, response){
    const id=request.body.id;
    Book.findOne({_id:id}, function(err, book){
        if(err){
            response.status(500).send({error:"Oops Sorry.. books could not be fetched"});
        }
        else{
            response.send(book);
        }
    });
});



app.post('/shelf', function(request, response){
    var shelf= new Shelf();
    shelf.title=request.body.title;
    shelf.save(function(err, newShelf){
        if(err){
            response.status(500).send({error:"Could not create shelf"});
        }
        else{
            response.send(newShelf);
        }
    });
});


app.get('/shelf', function(request, response){
    Shelf.find({}).populate({path:'books', model:'Book'}).exec(function(err, shelves){
        if(err){
            response.status(500).send({error:"Could not fetch shelf data"});
        }
        else{
            response.send(shelves);
        }
        
    });
});

app.put('/shelves/book/add', function(request, response){
    Book.findOne({_id: request.body.bookId}, function(err,book){
        if(err){
            response.status(500).send({error:"Could not find the book you are looking for"});
        }
        else{
            Shelf.updateOne({_id: request.body.shelfId}, {$addToSet: {books:book._id}}, function(err, shelf){
                if(err){
                    response.status(500).send({error:"Could not add the book."});
                }
                else{
                    response.send(shelf);
                }
            });
        }
    });
});




// app.put('/book/update', function(request, response){
//     // Book.findOne({_id: request.body.bookId}, function(err,book){
//     //     if(err){
//     //         response.status(500).send({error:"Could not find the book you are looking for"});
//     //     }
//     //     else{
//             // console.log(book.title);
//             Book.updateOne({_id: request.body.bookId}, 
//                  {$set: { title:request.body.title, author: request.body.author,price:request.body.price, genre:request.body.genre}}, 
//                 function(err, book){
//                 if(err){
//                     response.status(500).send({error:"Could not add the book."});
//                 }
//                 else{
//                     response.send(book);
//                 }
//             });
//     //     }
//     // });
// });


app.put('/book/update',(req,res)=>{
    const title = req.body.title;
    const author = req.body.author;
    const price = req.body.price;
    const genre = req.body.genre;
    const id = req.body.id;
    console.log(id);
    Book.findOneAndUpdate({_id:id},{$set:{title:title,price:price,author:author,genre:genre}})
    .then(result=>{
        console.log(result);
        res.status(200).json({msg:"successfully updated"});
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred"});
    });
})






app.listen(3004, function(){
    console.log("Server is running...");
});