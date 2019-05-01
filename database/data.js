const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

// set seed
faker.seed(123);

// generate data
const generateBookInfo = function BookInfo() {
  const bookInfo = {
    title: faker.random.words(2),
    author: faker.name.findName(),
    description: faker.lorem.sentences(6)
  };
  return bookInfo;
};

const generateImage = function Image() {
  const image = {
    bookInfo_id: faker.random.number({ min: 1, max: 1000000 }),
    image: faker.image.image()
  };
  return image;
};

const generateUsers = function Users() {
  const users = {
    email: faker.internet.email(),
    bookInfo_id: faker.random.number({ min: 1, max: 1000000 })
  };
  return users;
};

const generateRatings = function Ratings() {
  const ratings = {
    bookInfo_id: faker.random.number({ min: 1, max: 1000000 }),
    user_id: faker.random.number({ min: 1, max: 1000000 }),
    rating: faker.random.number({ min: 1, max: 2000000 })
  };
  return ratings;
};

const generateReviews = function Reviews() {
  const reviews = {
    bookInfo_id: faker.random.number({ min: 1, max: 1000000 }),
    review: faker.lorem.sentences(10)
  };
  return reviews;
};

const generateReadStatus = function ReadStatus() {
  const readStatus = {
    bookInfo_id: faker.random.number({ min: 1, max: 1000000 }),
    user_id: faker.random.number({ min: 1, max: 1000000 }),
    status: faker.random.number({ min: 0, max: 1 })
  };
  return readStatus;
};

const dataWriteToDisk = function WriteToDisk(fileName, batch, callback, drainfunc) {
  // get header for each file
  const writer = csvWriter({
    headers: Object.keys(callback())
  });

  writer.pipe(fs.createWriteStream(`./data/${fileName}_${batch}.csv`));

  // generate 10M records
  let noOfProfiles = 10000000;
  function drainWrite() {
    let ok = true;
    do {
      const data = callback();
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
  }
  drainWrite();
  console.log(`SUCCESS : File ./data/${fileName}_${batch}.csv created`);
};

// execution time
console.time('timing seed');

const filesToCreate = 5;

dataWriteToDisk('bookInfo', 0, generateBookInfo);
dataWriteToDisk('image', 0, generateImage);
dataWriteToDisk('users', 0, generateUsers);
dataWriteToDisk('ratings', 0, generateRatings);
dataWriteToDisk('reviews', 0, generateReviews);
dataWriteToDisk('readStatus', 0, generateReadStatus);

// for (let batch = 0; batch < filesToCreate; batch++) {
//   dataWriteToDisk('bookInfo', batch, generateBookInfo);
// }
console.timeEnd('timing seed');
