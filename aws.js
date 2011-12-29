var simpledb = require('simpledb')
var sdb      = new simpledb.SimpleDB({keyid:'0M09DBHE7QRAQ0ZQ34R2',secret:'H3jMU88EdOrNRGoI/AnaX9R9UKaTdY+G42upY1fn'})
var domain = 'sb1' 
sdb.createDomain( domain, function( error ) {
    if(error){
        console.log("domain can't be created");
    }     
});
sdb.putItem(domain,'user1',{attr1:'user@mail.com',attr2:'pass'},function (error) {
    if(error){
        console.log("can't insert user"+error);
    }
});
sdb.putItem(domain,'user2',{attr1:'user@mail.com',attr2:'pass'},function (error) {
    if(error){
        console.log("can't insert user");
    }
});
