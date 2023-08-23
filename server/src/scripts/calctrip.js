import {
  start,
  get,
} from 'prompt';

const calcTrip = (value) => {
  const crypto = require('crypto');
  const sha = crypto.createHash('sha256');
  console.log(process.env.TRIPSALT);
  sha.update(value + process.env.TRIPSALT);
  return sha.digest('base64').slice(0, 6);
}

const question = "Password?"

start();
get([question], (err, result) => {
  if (err) {
    return;
  }
  console.log(calcTrip(result[question]))
});