import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";

function ItemList() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [newItem, setNewItem] = useState("");

  // Fetch items from API (or mock JSON-server)
  useEffect(() => {
    axios.get("http://localhost:5000/items")
      .then(response => setItems(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  // Filter items based on search input
  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Function to add a new item to the list (updates state only)
  const handleAddItem = () => {
    if (!newItem.trim()) return; // Prevent empty submissions
    const newItemObj = { id: items.length + 1, name: newItem, category: "C" };
    
    setItems([...items, newItemObj]); // Update state
    setNewItem(""); // Reset input field
  };

  return (
    <div>
      {/* Search Bar */}
      <input 
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Add New Item */}
      <input 
        type="text" 
        placeholder="Add new item..."
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)} 
      />
      <button onClick={handleAddItem}>Add Item</button>

      {/* Display Items */}
      {filteredItems.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
