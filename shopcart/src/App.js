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
      <div style={{ padding: 40 }}>
        <h1>{this.state.siteName}</h1>
        <p>{totalQty} items</p>

        {this.state.products.map((p, i) => (
          <div key={i} style={{ marginTop: 20 }}>
            <h3>{p.desc}</h3>
            <img src={p.image} alt={p.desc} width={120} />
            <div>Quantity: {p.value}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;