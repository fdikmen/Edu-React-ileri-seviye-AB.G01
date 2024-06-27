//src/main.js

// import foo from "./foo.js";
// import {version} from "../package.json";

export default function () {
    // console.log(foo);

    import("./foo.js").then(({default:foo}) => console.log(foo));

    // console.log("version number :" + version);
}

/*
export const main01 = () => {
  return (
    <div>main</div>
  )
}

export const main02 = () => {
    return (
      <div>main</div>
    )
  }

  export const main03 = () => {
    return (
      <div>main</div>
    )
  }
    */
