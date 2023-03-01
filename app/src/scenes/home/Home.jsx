
import React from "react";
// component imports
import Link from "../../components/Link";
// icon
import { ArrowForwardIosRounded } from "@mui/icons-material";
import '../../styles/home.css';
import BeatsList from "./BeatsList";
 // import { useGetItemsQuery } from "../../redux/stateApi";
 // import { useSelector } from "react-redux";



const Home = () => {
   // const Items = useSelector((state) => state.cart.items);
  //  const {data } = useGetItemsQuery(Items)


  
     return (
      <div>
    <section className="landing-page">
      <div className="donate-support center w-100">
        <Link text={"Donate to support my patron"}  icon={<ArrowForwardIosRounded />}  link={""}  />
      </div>
      <div className="New-Products-LP">
        <div className="MacbookAirM2-LP">
          <div>
            <h1>MaadYouDidThat</h1>
            <div className="row-nospace center">
              <h2>Supercharged by BeatsbyMaad</h2>
            </div>
            <div className="row-around">
              <Link text={"Learn More"} icon={<ArrowForwardIosRounded style={{ marginTop: 5 }} />}  link={""}  size={20}   />
              <Link text={"Buy"} icon={<ArrowForwardIosRounded style={{ marginTop: 5 }} />} link={""}  size={20}  />
              </div>
            </div>
          </div>
        </div>
    </section>

<BeatsList  />

</div>
  );
}


export default Home;