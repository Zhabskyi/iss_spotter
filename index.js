// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });


// fetchCoordsByIP("184.68.214.222", (error, data) => {
//   if (error) {
//     console.log('Error fetch details:', error);
//   } else {
//     console.log('It worked! Returned Coords:' ,data);
//   }
// });

// fetchISSFlyOverTimes({ latitude: '51.12640', longitude: '-114.14190' }, (error, data) => {
//   if (error) {
//     console.log('Error fetch details:', error);
//   } else {
//     console.log('It worked! Returned Risetime and duration \n' ,data);
//   }
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for (const item of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(item.risetime);
    const duration = item.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
});