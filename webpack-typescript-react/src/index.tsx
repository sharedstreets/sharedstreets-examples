import axios from 'axios';
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as sharedstreets from 'sharedstreets';
import * as sharedstreetsPbf from 'sharedstreets-pbf';
import { SharedStreetsGeometry } from 'sharedstreets-types';

const Intersection = (props: {x: number, y: number}) =>
  <div>
    <h1>Intersection [{props.x}, {props.y}]</h1>
    <h2>Id => {sharedstreets.intersectionId([props.x, props.y])}</h2>
  </div>

const Geometry = (props: {geometry: SharedStreetsGeometry}) =>
  <div>
    <h1>Geometry [{props.geometry.latlons}]</h1>
    <h2>Id => {props.geometry.id}</h2>
  </div>

export class Geometries extends React.Component<{url: string}, {geometries: SharedStreetsGeometry[]}> {
  constructor (props) {
    super(props)
    this.state = {
      geometries: []
    }
  }
  componentDidMount() {
    axios.get(this.props.url, {responseType: 'arraybuffer'}).then(buffer => {
      this.setState({geometries: sharedstreetsPbf.geometry(new Buffer(buffer.data))})
    })
  }
  render() {
      return (
        <div>
          <h1>Geometries [{this.state.geometries.length} total]</h1>
          {this.state.geometries.map((geometry, index) => {
            return <h2 key={index}>Id {index} => {geometry.id}</h2>
          })}
        </div>
      )
  }
}

ReactDOM.render(
  <div>
    <Intersection x={110} y={45} />
    <Geometries url='public/11-602-770.geometry.pbf' />
  </div>,
  document.getElementById("example")
);