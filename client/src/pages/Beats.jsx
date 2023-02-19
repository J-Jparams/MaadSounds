import React from "react";
import { supabase } from "../lib/client";
import { useEffect, useState } from "react";

function Beats() {
  const [products, setProducts] = useState([])

 async function fetchData() {
  let { data: products } = await supabase.from('product').select('mp3')
  setProducts(products)
 }

 useEffect(() => {
    fetchData()

 }, [])

console.log(products)
  return (
    <div>
          <h1 className="text-3xl font-bold underline">
      Hello world! Beats Page
    </h1>
    </div>
  );
}

export default Beats;