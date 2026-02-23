import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  state = {
    siteName: "Shop to React",
    products: [
      { image: "/products/cologne.jpg", desc: "Unisex Cologne", value: 0 },
      { image: "/products/iwatch.jpg", desc: "Apple iWatch", value: 0 },
      { image: "/products/mug.jpg", desc: "Unique Mug", value: 0 },
      { image: "/products/wallet.jpg", desc: "Mens Wallet", value: 0 },
    ],
  };

  render() {
    const totalQty = this.state.products.reduce((sum, p) => sum + p.value, 0);

    return (
      <div style={{ backgroundColor: "#f3f3f3", minHeight: "100vh" }}>
        {/* Header */}
        <div
          style={{
            backgroundColor: "#63C6E8",
            padding: "22px 0",
            borderBottom: "1px solid #d9d9d9",
          }}
        >
          <div
            style={{
              padding: "0 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontSize: "40px", fontWeight: 300 }}>
              {this.state.siteName}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span style={{ fontSize: 14 }}>{totalQty} items</span>
            </div>
          </div>
        </div>

        {/* Product list wrapper (gives the right border look) */}
        <div
          style={{
            backgroundColor: "#fff",
            margin: "0 18px",
            borderLeft: "1px solid #e6e6e6",
            borderRight: "1px solid #e6e6e6",
          }}
        >
          {this.state.products.map((p, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#fff",
                borderBottom: "1px solid #e6e6e6",
                padding: "16px 22px",
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 500, marginBottom: 12 }}>
                {p.desc}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 70 }}>
                <img
                  src={p.image}
                  alt={p.desc}
                  style={{ width: 110, height: 110, objectFit: "contain" }}
                />

                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      border: "2px solid #d9d9d9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                    }}
                  >
                    {p.value}
                  </div>
                  <div style={{ fontSize: 16 }}>quantity</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;