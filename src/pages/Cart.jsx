import React, { useState } from "react";
import { getItem, setItem } from "../services/LocalStorageFuncs";
import { BsCartDashFill } from "react-icons/bs";

export const Cart = () => {
  const [data, setData] = useState(getItem("objcart" || []));

  const removeItem = (obj) => {
    const arrFilter = data.filter((e) => e.id !== obj.id);
    setData(arrFilter);
    setItem("objcart", arrFilter);
  };

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt={e.title} />
            <h4>{e.price}</h4>
            <button onClick={() => removeItem(e)}>
              <BsCartDashFill />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
