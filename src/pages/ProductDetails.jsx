import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams(); // URL থেকে id নেয়া হলো

  const products = [
    { id: "1", name: "Laptop", price: 800, description: "A high-performance laptop" },
    { id: "2", name: "Phone", price: 500, description: "A latest smartphone" },
    { id: "3", name: "Tablet", price: 300, description: "A versatile tablet for all needs" },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <h2 className="text-red-500">Product not found</h2>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-lg">Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
