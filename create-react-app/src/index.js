import axios from 'axios';
import * as sharedstreets from 'sharedstreets';
import * as sharedstreetsPbf from 'sharedstreets-pbf';

// Example for SharedStreets
console.log(sharedstreets.intersectionId([110, 45]))

// Example for SharedStreets-PBF
axios.get('11-602-770.geometry.pbf', {responseType: 'arraybuffer'}).then(buffer => {
  console.log(sharedstreetsPbf.geometry(new Buffer(buffer.data)))
})