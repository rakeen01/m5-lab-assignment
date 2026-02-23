import React, { Component } from "react";

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
    const totalQty = this.state.products.reduce(
      (sum, p) => sum + p.value,
      0
    );

    return (
      <div style={{ backgroundColor: "#f3f3f3", minHeight: "100vh" }}>
        
        {/* Header */}
        <div
          style={{
            backgroundColor: "#63C6E8",
            padding: "20px 40px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <h1 style={{ margin: 0 }}>{this.state.siteName}</h1>
          <div style={{ fontSize: 14 }}>{totalQty} items</div>
        </div>

        {/* Product list */}
        <div style={{ padding: 40 }}>
          {this.state.products.map((p, i) => (
            <div key={i} style={{ marginBottom: 40 }}>
              <h3>{p.desc}</h3>
              <img src={p.image} alt={p.desc} width={120} />
              <div>Quantity: {p.value}</div>
            </div>
          ))}
        </div>

      </div>
    );
  }
}

export default App;