import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { connect } from "react-redux";
import { Badge, NavItem, NavLink } from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";

class CartSummary extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " sepetten silindi");
  }
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>sepet boş</NavLink>
      </NavItem>
    );
  }

  renderSummary() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          sepetiniz
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {this.props.cart.map((cartItem) => (
            <Dropdown.Item key={cartItem.product.id}>
              <Badge
                key={cartItem}
                color="danger"
                onClick={() => this.removeFromCart(cartItem.product)}
              >
                -
              </Badge>
              {cartItem.product.productName}
              <Badge color="success"> {cartItem.quantity}</Badge>
            </Dropdown.Item>
          ))}
          <Dropdown.Divider />
          <Link key={Link} to={"/cart"}>
            sepete git
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}
function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
