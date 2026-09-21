import React from "react";

const Link = () => {
  let link = ["About", "Service", "works", "Products", "Contact"];

  let links = link.map((element) => {
    return <p>{element}</p>;
  });
  return (
    <p className="flex justify-center items-center gap-7 text-[19px] text-white">
      {links}
    </p>
  );
};

export default Link;
