import React from "react";
import TrialForm from "./common/TrialForm";

const HeroSection = () => {
  return (
    <div className='flex justify-around p-32 border-solid	border-2 border-indigo-600'>
      <div className='w-3/5'></div>
      <TrialForm />
    </div>
  );
};

export default HeroSection;
