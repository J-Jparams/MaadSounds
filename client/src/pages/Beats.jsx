import React from "react";
import { supabase } from "../lib/client";
import { useEffect } from "react";

function Beats() {

 async function fetchData() {
  let { data: products } = await supabase.from('product').select('*')
  console.log(products)
 }

 useEffect(() => {
    fetchData()

 }, [])


  return (
    <div>
          <h1 className="text-3xl font-bold underline">
      Hello world! Beats Page
    </h1>

    </div>
  );
}

export default Beats;