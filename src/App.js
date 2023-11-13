import './App.css';

let App = () => {
  return (
    <div className="App">
      <header>
        <h1>Welcome to my shop</h1>
        <div>
          <div className="nav-container">
            <div className="logo"></div>
            <div className="link">Home</div>
            <div className="link">Shop</div>
            <div className="link">Custom</div>
            <div className="link">Deals</div>
            <div className="link">Contact</div>
          </div>
        </div>
      </header>

      <div className="main-products-container">
        <div className="products-container-our">
          <h1>Our Products</h1>
          {products.map((ele, idx) => <div className="product" key={idx}>
              <h1>{ele.product}</h1>
            </div>)}
        </div>
        <div className="products-container-bestseller">
          <h1>Best Sellers</h1>
          {products.filter(ele => ele.bestSeller).map((ele, idx) => <div className="product" key={idx}>{ele.category}</div>)}
        </div>
      </div>

      <footer>All rights reserved</footer>
    </div>
  )
  }

const products = [
  {
    product: "flash t-shirt",
    price: 27.5,
    category: "t-shirts",
    bestSeller: false,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61ZipyCaAKL._AC_UX385_.jpg",
    onSale: true,
  },
  {
    product: "batman t-shirt",
    price: 22.5,
    category: "t-shirts",
    bestSeller: true,
    image:
      "https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png",
    onSale: false,
  },
  {
    product: "superman hat",
    price: 13.9,
    category: "hats",
    bestSeller: true,
    image:
      "https://banner2.kisspng.com/20180429/rqe/kisspng-baseball-cap-superman-logo-batman-hat-5ae5ef317f8366.9727520615250184175223.jpg",
    onSale: false,
  },
];

export default App;
