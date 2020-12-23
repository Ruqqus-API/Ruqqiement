import sentiment from "./sentiment/index.js";

const inputs = ["I love you", "get lost", "Ok", "Np bb", "it is what it is"];

inputs.forEach(i => {
    sentiment(i).then(console.log);
});


export {};