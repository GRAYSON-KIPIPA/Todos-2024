import React, { useState } from "react";

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

const Examples = () => {
  function multiply(n: number, m: number[]) {
  }

  multiply(2, [1, 2, 3, 4, 5, 6]);

  interface Values {
    readonly name: string 
  }

  function studeneName(name: Values){
    console.log(name)
  }

  enum Std {
    formOne = "SARAH",
    formTwo="JENIPHER",
    formThree = 1,  
    formFour="MARIAM"
  }

  console.log(Std)

  enum FileAccess {
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    G = "123".length,
  }

  console.log(FileAccess);
    return <div></div>;
};

export default Examples;
