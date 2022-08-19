import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const PRODUCTS = [
  { id: "p1", price: 1000, title: "Atomic Habits", description: "James Clear" },
  {
    id: "p2",
    price: 2000,
    title: "The Power of Habit",
    description: "Charles Duhigg",
  },
  {
    id: "p3",
    price: 3000,
    title: "The Art of Thinking Clearly",
    description: "Rolf Dobelli",
  },
  {
    id: "p4",
    price: 4000,
    title: "Mindset: Changing The Way You think To Fulfil Your Potential",
    description: "Dr. Carol S. Dweck",
  },
  {
    id: "p5",
    price: 5000,
    title: "Blink: The Power of Thinking Without Thinking",
    description: "Malcolm Gladwell",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
