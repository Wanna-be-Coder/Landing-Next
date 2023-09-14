import { FlagComponent } from "country-flag-icons/react/3x2";
import React from "react";

interface Props {
  US: FlagComponent;
}

const FlagComponent: React.FC<Props> = ({ US }) => {
  return (
    <div className='flex items-center'>
      <US title='United States' className='h-6 p-1' />
      <span>America</span>
    </div>
  );
};

export default FlagComponent;
