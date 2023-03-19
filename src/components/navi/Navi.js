import React from "react";
import { Navbar, NavbarBrand, Nav } from "reactstrap";
import CartSummary from "../cart/CartSummary";

function Navi(args) {
  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <Nav>
          <CartSummary />
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navi;
