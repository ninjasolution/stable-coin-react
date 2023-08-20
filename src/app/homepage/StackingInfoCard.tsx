import React from 'react';

interface StackingInfoCardProps {
 TopHeaderLogo : string
  CardLogo1: string;
  CardLogo2: string;
  Apy: string;
  TotalBnB: string;
}

const StackingInfoCard: React.FC<StackingInfoCardProps> = ({TopHeaderLogo , CardLogo1, CardLogo2, Apy, TotalBnB }) => {
  return (
    <div className="space-y-10 transition-all hover:-translate-y-5 rounded-md bg-white border shadow-md p-5 md:w-[290px] duration-500 ease-in-out cursor-pointer">
      <div className="flex md:flex-col items-center justify-between">
        <div>
          <h3 className="flex items-center gap-3">
            <img src={TopHeaderLogo} alt="coin_icon" height={24} width={24} />
            <span>BNBUSD Pool</span>
          </h3>
          <small className="text-small-xs1">Stake FDUSD, Earn CYBER</small>
        </div>

        <div className="flex justify-center items-center md:outline outline-green-500 h-20 w-20 p-3 rounded-full mt-4">
          <img className="transform translate-x-2" src={CardLogo1} alt="coin_icon" width={34} height={34} />
          <img src={CardLogo2} alt="coin_icon" width={34} height={34} />
        </div>
      </div>
      <div className="space-y-3">
        <p className="flex justify-between items-center text-sm">
          <span className="text-small-p2">APY:</span>
          <span className="font-semibold">{Apy}</span>
        </p>
        <p className="flex justify-between items-center text-sm">
          <span className="text-small-p2">Total Staked:</span>
          <span className="font-semibold">{TotalBnB}BNB</span>
        </p>
      </div>
      <button className="bg-[#FCD535] w-full py-2.5 rounded hover:scale-[102%]">
        Stake Now
      </button>
    </div>
  );
};

export default StackingInfoCard;
