import React from "react";
import { useStore } from "../store/store";

const Dashboard = () => {
  const { bears, increaseBear, decreaseBear, resetBears } = useStore();

  function user(id: number | string | boolean) {
    switch (typeof id) {
      case"number": {
        console.log("Number");
        break;
      }

      case typeof "string": {
        console.log("String");
        break;
      }

      case "boolean": {
        console.log("Boolean");
        break;
      }

      default: {
        console.log("No Matching Union value");
      }
    }
  }

  user(true);

  function admin(admin: User){
     console.log(`username: ${admin.userName} password: ${admin.password}`)
  }

  function customer(customer: User){
    console.log(`username: ${customer.userName} password: ${customer.password}`)

  }

  admin({userName: "Grayson", password: 1234})
  // customer({userName:"Kelvi@gmail.com", password: 2121})
  return (
    <div>
      <h1>{bears}</h1>
      <button onClick={increaseBear}>Add</button>
      <button onClick={decreaseBear}>Decrease</button>
      <button onClick={resetBears}>Reset</button>
    </div>
  );
};

export default Dashboard;


type User ={
 userName: string,
 password: number
}