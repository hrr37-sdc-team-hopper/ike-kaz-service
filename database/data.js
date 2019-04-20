var faker = require('faker');
var csv = require('csv-parser');
var fs = require('fs');

//set seed
faker.seed(123);

var generateRating = function(max){
  // return random Number between 0 and max
  var randomNum = parseInt(Math.random() * max)
  return randomNum;
};


// generate data
var data_bookInfo = function(){
  var bookInfo = {
    title : faker.random.words(3),
    author : faker.name.findName(),
    description : faker.lorem.sentences(6),
    num_reviews : faker.random.number({"min" :1, "max" : 50000}),
    num_ratings : faker.random.number({"min" :1, "max" : 2000000}),
    ratings_star : faker.random.number(0, 5, 2),
    image :faker.image.image()
  };
  return bookInfo;
};

var data_users = function(){
  var users = {
    email : faker.internet.email(),
    bookInfo_id : faker.random.number({"min" :1, "max" : 1000000})
  };
  return users;
};


var data_readStatus = function(){
  var readStatus = {
    bookInfo_id : faker.random.number({"min" :1, "max" : 1000000}),
    user_id : faker.random.uuid(),
    status : faker.random.number({"min" :0, "max" : 1})
  };
  return readStatus;
};


var dataWriteToDisk = function(fileName, batch, callback){

  var dataToStore = [];
  var noOfProfiles =  250000;  // generate 250K records per ass

    if (fileName === 'users') {
      for ( var i = 0; i < noOfProfiles * 4 ; i++){
        dataToStore.push(callback());
      }
     }  else {
      for (var i = 1; i <= noOfProfiles ; i++) {
        dataToStore.push(callback());
      }
    }

    var  writeStream = fs.createWriteStream(__dirname + `/data/${fileName}_${batch}.json`);

    // write some data with a base64 encoding
    writeStream.write(JSON.stringify(dataToStore));

    // the finish event is emitted when all data has been flushed from stream
    writeStream.on('finish', () => {
        console.log(`SUCCESS : File /data/${fileName}_${batch}.json created`);
    });

    writeStream.end();

};

// execution time
console.time('timing seed');

var filesToCreate = 40;
for (var batch = 0; batch < filesToCreate ; batch++) {
  dataWriteToDisk('bookInfo', batch, data_bookInfo)
  dataWriteToDisk('readStatus', batch, data_readStatus);
  dataWriteToDisk('users', batch, data_users);
}

console.timeEnd('timing seed');
