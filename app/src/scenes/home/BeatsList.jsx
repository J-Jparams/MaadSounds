import React, { useEffect, useState }  from   'react' ;
import { Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import  { useDispatch, useSelector }  from   'react-redux' ;
import useMediaQuery from "@mui/material/useMediaQuery";
import  { supabase }  from   '../../lib/client' ;
import  { setItems }  from   '../../redux/index' ;
import Item  from   '../../components/Item' ;

const  BeatsList = ( ) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("all");
      const breakPoint = useMediaQuery("(min-width:600px)");
    const items = useSelector((state) => state.cart.items);
   //   console.log("items", items)
     
const handleChange = (event, newValue) => {
    setValue(newValue);
}


async function getItems() {
    const items = await supabase.from("product")
    .select("*")
    dispatch(setItems(items.data))
}
useEffect(() => {
    getItems()
}, [])  // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div>
   <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Featured <b>Beats</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
        </div>
    )
}

export  default  BeatsList;