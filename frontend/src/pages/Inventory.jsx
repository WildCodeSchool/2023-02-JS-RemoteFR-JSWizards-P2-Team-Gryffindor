import ScrollBtn from "../components/ScrollBtn";
import CharSelection from "../components/Game/CharSelection";

export default function Inventory() {
  return (
    <>
      <CharSelection info="Card Inventory" />
      <ScrollBtn />
    </>
  );
}
