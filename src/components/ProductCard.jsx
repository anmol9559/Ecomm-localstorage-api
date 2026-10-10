import React from "react";

const ProductCard = ({ product }) => {
  return (
    <article className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
      <img
        className="h-60 w-full object-cover"
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
      />
      <div className="p-4">
        <p className="text-sm capitalize text-zinc-400">{product.category}</p>
        <h2 className="mt-1 text-lg font-semibold">{product.title}</h2>
        <p className="mt-2 text-xl font-bold">${product.price.toFixed(2)}</p>
        <p className="mt-1 text-sm text-zinc-400">
          {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
