import StackingInfoCard from "./StackingInfoCard";

export default function StackingInfoCardContainer() {
  return (
    <>
      <StackingInfoCard
        TopHeaderLogo="/logo/13.png"
        CardLogo1="/logo/1.png"
        CardLogo2="/logo/2.png"
        Apy="13.60%"
        TotalBnB="3284k "
      />
      <StackingInfoCard
        TopHeaderLogo="/logo/1.png"
        CardLogo1="/logo/4.png"
        CardLogo2="/logo/5.png"
        Apy="13.60%"
        TotalBnB="3284k "
      />

      <StackingInfoCard
        TopHeaderLogo="/logo/9.png"
        CardLogo1="/logo/6.png"
        CardLogo2="/logo/7.png"
        Apy="13.60%"
        TotalBnB="3284k "
      />
    </>
  );
}
