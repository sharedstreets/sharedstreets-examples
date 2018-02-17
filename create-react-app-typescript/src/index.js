"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const sharedstreets_conflator_1 = __importDefault(require("sharedstreets-conflator"));
const helpers_1 = require("@turf/helpers");
const sharedstreets = __importStar(require("sharedstreets"));
const sharedstreetsPbf = __importStar(require("sharedstreets-pbf"));
// Example for SharedStreets
console.log(sharedstreets.intersectionId([110, 45]));
// Example for SharedStreets-PBF
const url = 'http://dyv8b90u6p2hr.cloudfront.net/12-1173-1576.geometry.pbf';
axios_1.default.get(url, { responseType: 'arraybuffer' }).then(buffer => {
    console.log(sharedstreetsPbf.geometry(new Buffer(buffer.data)));
});
// GeoJSON Data
const line = helpers_1.lineString([[-76.84212620000001, 38.256918600000006], [-76.8428299, 38.257417100000005]]);
for (const object of sharedstreets_conflator_1.default(line)) {
    console.log(object);
}
