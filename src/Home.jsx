import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img2.jpg";
import Common from "./Common";

const Home = () =>
{
  return(
    <>
    <Common name='Grow your Business with' imgsrc={web} visit="/service" btname="Get started"></Common>

    </>
  );

};

export default Home;
