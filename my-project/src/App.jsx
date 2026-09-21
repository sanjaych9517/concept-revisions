import React from "react";
import Logo from "./component/Logo";
import Link from "./component/Link";
import Button from "./component/Button";
import Heading from "./component/Heading";
import Text from "./component/Text";

const App = () => {
  return (
    <div className="mx-6!">
      <div className="flex justify-around items-center gap-10 my-5! pl-2.5!">
        <Logo title="Yabder" />
        <Link />
        <Button title="SignUp" className="bg-red-500" />
      </div>

      <div className="grid grid-cols-3">
        <Heading />
      </div>
      <Text />
      <div className="mt-5!">
        <Button title="LetUs-Took" className="bg-red-500 mx-10.5!" />
        <Button title="Start Project" className="bg-blue-500 mx-10.5!" />
      </div>
    </div>
  );
};

export default App;
