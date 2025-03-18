function Item({ item }) {
    return (
      <div className="border p-4 m-2">
        <h3>{item.name}</h3>
        <p>Category: {item.category}</p>
      </div>
    );
  }
  
  export default Item;
  