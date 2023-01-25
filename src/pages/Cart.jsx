import React, { useState } from "react";
import { getItem } from "../services/LocalStorageFuncs";

export const Cart = () => {
  const [data, setData] = useState(getItem("cart" || []));

  return (
    <div>
      <h1>Carrinho</h1>
    </div>
  );
};
