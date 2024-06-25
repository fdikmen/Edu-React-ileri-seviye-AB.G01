//src/main.js

import foo from "./foo.js";
import {version} from "../package.json";

export default function () {
    console.log(foo);
    console.log("version number :" + version);
}