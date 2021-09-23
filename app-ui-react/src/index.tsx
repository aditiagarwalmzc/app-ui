import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConnectorModel, DiagramComponent, NodeModel } from "@syncfusion/ej2-react-diagrams";
import { setBlankIconStyle } from '@syncfusion/ej2-splitbuttons';

let nodes: NodeModel[] = [
  {
id: "node1",
offsetX: 300,
offsetY: 200,
shape: { type: "Flow", shape: "Terminator" },
style: {
  fill: '#4AA1D5'
},
annotations: [
  {
    content: "Source"
  }
]
  },
  {
    id: "node2",
    offsetX: 500,
    offsetY: 200,
    shape: { type: "Flow", shape: "Terminator" },
    style: {
      fill: '#8FB139'
    },
    annotations: [
      {
        content: "Destination;"
      }
    ]
    }
];

let connectors: ConnectorModel[] = [
  {
id: "connector1",
sourceID: "node1",
targetID: "node2",
style: {
  strokeColor: '#3D3C3C',
  fill: '#3D3C3C',
  strokeWidth: 2
},
targetDecorator: {
  style: {
      fill: '#3D3C3C',
      strokeColor: '#3D3C3C'
  }
  }
}
];

ReactDOM.render(
  <DiagramComponent
id="diagram"
width={"100%"}
height={"2600px"}

nodes={nodes}
connectors={connectors}
getNodeDefaults={(node: NodeModel): NodeModel => {
  node.height = 50;
  node.width = 140;
  return node;
}}
getConnectorDefaults={(obj: ConnectorModel) => {
  obj.type = "Bezier";
}}
  />,
  document.getElementById("diagram")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
