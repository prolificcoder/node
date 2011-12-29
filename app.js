var app = require('express').createServer();

app.configure( function() {
});
app.get('/users/:id?',function(req,res){
    res.send('hello world');
});

app.listen(8000);
