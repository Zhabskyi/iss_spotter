const { fetchMyIP } = require('./iss_promised.js');
const { fetchCoordsByIP } = require('./iss_promised.js');
const { fetchISSFlyOverTimes } = require('./iss_promised.js');
const { nextISSTimesForMyLocation } = require('./iss_promised.js');

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));

  nextISSTimesForMyLocation()
    .then((times) => {
      for (const item of times) {
        const datetime = new Date(0);
        datetime.setUTCSeconds(item.risetime);
        const duration = item.duration;
        console.log(`Next pass at ${datetime} for ${duration} seconds!`);
      }
    })
    .catch((error) => {
      console.log("It didn't work: ", error.message);
    });