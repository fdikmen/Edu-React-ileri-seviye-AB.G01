//console.log('Hello from index.js')

//import camelCase
import { camelCase, upperCase } from 'lodash'

//import Styles
import './style.scss'

//Call camelCase function
const message01 = camelCase('Hello from index.js');

//Call camelCase function
const message02 = upperCase('Hello from index.js');

//Print message
console.log("Message 01: ", message01);
console.log("Message 02: ", message02);