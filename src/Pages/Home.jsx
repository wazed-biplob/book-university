import React from "react";
import CollegeCard from "../Section/CollegeCard/CollegeCard";
import ImageGallary from "../Section/ImageGallary/ImageGallary";
import ResearchPaper from "../Section/ResearchPaper/ResearchPaper";
import Review from "../Section/Review/Review";

const Home = () => {
  return (
    <>
      <CollegeCard />
      <ImageGallary />
      <ResearchPaper />
      <Review />
    </>
  );
};

export default Home;
