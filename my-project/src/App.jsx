import React from "react";
import Logo from "./component/Logo";
import Link from "./component/Link";
import Button from "./component/Button";

const App = () => {
  return (
    
      <div className="flex justify-around items-center gap-10 my-5! pl-2.5!">
        <Logo title="Yabder" />
        <Link />
        <Button />
      </div>
    
  );
};

export default App;
