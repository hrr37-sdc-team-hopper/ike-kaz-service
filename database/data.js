const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

// set seed
faker.seed(123);

// generate data
const generateBookInfo = function (){
  const bookInfo = {
    title: faker.random.words(3),
    author: faker.name.findName(),
    description: faker.lorem.sentences(6),
    num_reviews: faker.random.number({'min': 1, 'max': 50000}),
    num_ratings: faker.random.number({'min': 1, 'max': 2000000}),
    ratings_star: faker.random.number(0, 5, 2),
    image: faker.image.image()
  };
  return bookInfo;
};

const generateUsers = function (){
  const users = {
    email: faker.internet.email(),
    bookInfo_id: faker.random.number({'min': 1, 'max': 1000000})
  };
  return users;
};


const generateReadStatus = function (){
  const readStatus = {
    bookInfo_id: faker.random.number({'min' :1, 'max' : 1000000}),
    user_id: faker.random.uuid(),
    status: faker.random.number({'min' :0, 'max' : 1})
  };
  return readStatus;
};


const dataWriteToDisk = function (fileName, batch, callback, drainfunc){

  // get header for each file
  let writer = csvWriter({
    headers: Object.keys(callback())
  });

  writer.pipe(fs.createWriteStream(`./data/${fileName}_${batch}.csv`));

  var noOfProfiles =  10000;  // generate 250K records per pass
  function drainWrite() {
    var ok = true;
    do {
      data = callback()
      noOfProfiles -= 1;
      if (noOfProfiles === 0) {
        // last time!
          writer.write(data, drainfunc);

      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
          ok = writer.write(data);
      }
    } while (noOfProfiles > 0 && ok);
    if (noOfProfiles > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', drainWrite);
    }
  };
  drainWrite();
  console.log(`SUCCESS : File ./data/${fileName}_${batch}.csv created`);
};

// execution time
console.time('timing seed');

const filesToCreate = 15;

for (let batch = 0; batch < 2 ; batch++) {
  dataWriteToDisk('readStatus', 0, generateReadStatus);
  dataWriteToDisk('users', 0, generateUsers);
}

for (let batch = 0; batch < filesToCreate ; batch++) {
  dataWriteToDisk('bookInfo', batch, generateBookInfo);
}
console.timeEnd('timing seed');