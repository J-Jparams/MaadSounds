import { Box, Button, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "../../components/Item";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../redux/index";
import { useDispatch } from "react-redux";
import { supabase } from "../../lib/client";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItem() {
    const item = await supabase.from("product").select("*").eq("id", itemId);
    setItem(item.data[0]);
  }


console.log("item", item)

  useEffect(() => {
    getItem();
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      
    </div>
  );
};

export default ItemDetails;