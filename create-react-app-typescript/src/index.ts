import axios from 'axios';
import conflator from 'sharedstreets-conflator';
import {lineString} from '@turf/helpers';
import * as sharedstreets from 'sharedstreets';
import * as sharedstreetsPbf from 'sharedstreets-pbf';

// Example for SharedStreets
console.log(sharedstreets.intersectionId([110, 45]))

// Example for SharedStreets-PBF
const url = 'http://dyv8b90u6p2hr.cloudfront.net/12-1173-1576.geometry.pbf';

axios.get(url, {responseType: 'arraybuffer'}).then(buffer => {
  console.log(sharedstreetsPbf.geometry(new Buffer(buffer.data)))
})

// GeoJSON Data
const line = lineString([[-76.84212620000001, 38.256918600000006], [-76.8428299, 38.257417100000005]]);

for (const object of conflator(line)) {
  console.log(object)
}