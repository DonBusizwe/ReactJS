import React from "react";

export default function Header(props) {
  const { countCartItems } = props;
  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>&#8613;Busizwe's Shoppin Carti&#8613;&#9763;&#10025;&#10025;&#10025;</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
           Number of Carti 
          {countCartItems? (
            <button className="badge">{countCartItems}</button>
          ) : (
            " "
          )}
        </a> <a href="#/signin">Signin</a>
      </div>
    </header>
  );
}
