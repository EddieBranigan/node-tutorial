//npm --version
//local dependency = npm i <packagename>
//global dependency = npm -g <packagename>
//npm install -g <packagename>

//package.json - manifest file
//npm init (step by step setup of manifest file)
//npm init -y (default setup)

const _ = require('lo')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)