import React from "react";
import CollegeCard from "../Section/CollegeCard/CollegeCard";
import ImageGallary from "../Section/ImageGallary/ImageGallary";
import ResearchPaper from "../Section/ResearchPaper/ResearchPaper";
import Review from "../Section/Review/Review";
import Banner from "../Section/Banner/Banner";
import Subscribe from "../Section/Subscribe/Subscribe";
import Playstore from "../Section/Playstore/Playstore";

const Home = () => {
  return (
    <>
      <Banner />
      <CollegeCard />
      <ImageGallary />
      <ResearchPaper />
      <Subscribe />
      <Review />
      <Playstore />
    </>
  );
};

export default Home;
