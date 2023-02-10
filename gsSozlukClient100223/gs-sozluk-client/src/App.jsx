
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Nav from "./components/Nav";
import "./App.css";
import Topic from "./components/Topic";
import Message from "./components/Message";

function App() {
  const [count, setCount] = useState(0);

  const getBurdan = (al) => {
    return al;
  };

  return (
    <div className="bg-back" >

<Nav/>




      <body className=" grid grid-cols-5 mt-2">
        <Topic/>
        <Message/>

     
      </body>
    </div>
  );
}

export default App;
