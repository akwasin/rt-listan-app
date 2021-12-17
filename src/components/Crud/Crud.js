// import SourceData from "../../data/Source.json";
// import Payload from "../../data/Payload.json";
const fs = require('browserify-fs');


export const write = () => {
      fs.writeFile('hello-world.txt', 'Hello world!\n', function(err) {
        if (err) {
          return console.log(err);
        }
        fs.readFile('hello-world.txt', 'utf-8', function(err, data) {
          if (err) {
            return console.log(err);
          }
          console.log(data);
        });
      });
  };

export const removeFamily = (family) => {
    console.log(family);
}

export const addFamily = (family) => {
    console.log(family);
}