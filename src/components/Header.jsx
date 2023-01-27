import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from "../css/header";

export const Header = () => {
  return (
    <HeaderArea>
      <Link to="/">Loja</Link>
      <Link to="/cart">Carrinho</Link>
    </HeaderArea>
  );
};
