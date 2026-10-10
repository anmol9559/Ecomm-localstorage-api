import { useQuery } from "@tanstack/react-query";
import { getProductsDataApi } from "../api/productApi";
import { useState } from "react";

export const useProduct = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const { isPending, isError, error, data = [] } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsDataApi,
  });

  const filteredProducts = data.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = !category || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return {
    filteredProducts,
    isPending,
    isError,
    error,
    setSearch,
    setCategory,
  };
};