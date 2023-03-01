import { useState } from "react";
import { useDispatch } from "react-redux";
import {  IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import { PauseCircleIcon } from "@heroicons/react/24/solid";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../redux/index";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const { palette: { neutral }, } = useTheme();

   // audio player state
  const [audio] = useState(new Audio(item.mp3));
  const [isPlaying, setIsPlaying] = useState(false);  

// play/pause audio
const handlePlayPause = () => {
  setIsPlaying(!isPlaying);
}

// play audio on mount
useEffect(() => {
  isPlaying ? audio.play() : audio.pause();
}, [isPlaying, audio]); 
  return (
    <div className="flex items-center space-x-4">
    <div className="w-[260px] h-[360px] rounded-[50px] overflow-hidden relative text-white/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto"  onMouseOver={() => setIsHovered(true)}   onMouseOut={() => setIsHovered(false)}>
       <img alt={item.name} src={item.image} onClick={() => navigate(`/item/${item.id}`)}  className="h-full w-full absolute inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100" />
       <div className="absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-3.5" >
           <div className="" display={isHovered ? "block" : "none"}>
             <IconButton onClick={handlePlayPause} >
                  {isPlaying ? (
                  <PauseCircleIcon  className="h-9 w-9 text-green-500" /> 
                ) : (
                  <PlayCircleIcon className="h-9 w-9 text-green-500" />
               )}
                </IconButton>
           </div>
           <div className='text-[15px]'>
                <h4 className='font-extrabold truncate w-44'>{item.name}</h4>
             </div>
       </div>
    </div>
         <Box mt="3px">
        <Typography variant="subtitle2" color={neutral.dark}>
        </Typography>
        <Typography>{item.name}</Typography>
        <Typography fontWeight="bold">${item.price}</Typography>
           <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}
              sx={{ backgroundColor: shades.primary[300], color: "white" }}
            >
              Add to Cart
            </Button>
      </Box>
   </div>
  );
};

export default Item;
/*
 <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}
          width="300px"
          height="400px"
          src={item.image}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
               <IconButton onClick={handlePlayPause} >
                  {isPlaying ? (
                  <PauseCircleIcon className="h-10 w-10 bg-[#15883e] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#1db954]" /> 
                ) : (
                  <PlayCircleIcon className="h-10 w-10 bg-[#15883e] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#1db954]" />
               )}
                </IconButton>
            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}
              sx={{ backgroundColor: shades.primary[300], color: "white" }}
            >
              Add to Cart
            </Button>
           
          </Box>
        </Box>
      </Box>
      <Box mt="3px">
        <Typography variant="subtitle2" color={neutral.dark}>
        </Typography>
        <Typography>{item.name}</Typography>
        <Typography fontWeight="bold">${item.price}</Typography>
      </Box>
    </Box>



*/