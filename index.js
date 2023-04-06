// HMR - Hot Module Replacement, the server automatically reloads when changes are made
// How? using File watcher algorithm(written in C++)
// Minify our code
// Bundling
// Cleaning our code - removing console log statements etc
// image optimization
// parcel does all these things
// caching while development
// dev and production build
// compression
// compatible with older version of broweser - browserlist, parcel automatically gives it to us
// It adds polyfills
// https on dev : As some things work only in https, It gives this functionality
// npx parcel index.html --https
// port number - If you run two projects parallely, parcel will take care of it and run on two different ports
// we should put parcel-cache in gitignore
// compatible with older version of browser
// Anything which we can generate in server, we can put in git ignore
// It uses consistent hashing algorithm
// zero config
// why react is fast?
// It has got virtual DOM, the bundlers, dependencies all together makes it fast
// transistive dependency - dependency tree - app is not just react and parcel, it is a lot more things

import React from "react";
import ReactDOM from "react-dom/client";

// const headingElement = React.createElement(
//   "h1",
//   { id: "title" },
//   "Hello World!"
// );
// console.log(headingElement);
const root = ReactDOM.createRoot(document.getElementById("root"));
// Passsing the react element inside the root
// root.render(headingElement);
const h1Element = React.createElement(
  "h1",
  { id: "title1" },
  "Heading1 for parcel"
);
const h2Element = React.createElement("h2", { id: "title2" }, "Heading2");
const containerElement = React.createElement(
  "div",
  { id: "container", hello: "world" },
  [h1Element, h2Element]
);
root.render(containerElement);
