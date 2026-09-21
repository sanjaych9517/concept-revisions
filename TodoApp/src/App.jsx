import React from "react";

const App = () => {
  const fetchData = () => {
    const responce = fetch(
      "https://6ab095349751d2b03e6c3515.mockapi.io/user/users",
    );

    const data = responce.json();

    data.map((user) => {
      console.log(user);
    });
  };

fetchData();

  return <div></div>;
};

export default App;
