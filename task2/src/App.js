import './App.css';

function App() {
  
  return (
    <div className="App">
      <article class="product">
        <h2 class="product-title">Converse Chuck Taylor All Star Low Top</h2>
        <img
          src="https://i.ibb.co/Jr7Wh1d/challenges.jpg"
          alt="Chuck Taylor All Star Shoe"
          height="250"
          width="250"
        />

        <p class="price"><strong>$65.00</strong></p>
        <p class="shipping">Free shipping</p>
        <p>
          Ready to dress up or down, these classic canvas Chucks are an everyday
          wardrobe staple.
        </p>

        <a class="more-info" href="https://www.converse.com"
          >More information &rarr;</a
        >

        <h3 class="details-title">Product details</h3>
        <ul class="details-list">
          <li>Lightweight, durable canvas sneaker</li>
          <li>Lightly padded footbed for added comfort</li>
          <li>Iconic Chuck Taylor ankle patch</li>
        </ul>

        <button class="add-cart">Add to cart</button>
      </article>
    </div>
  );
}

export default App;
