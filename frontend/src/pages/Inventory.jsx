import CreateCard from "@components/CreateCard";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterBtn from "../components/FilterBtn";
import CardGryf from "../components/CardGryf";
import CardRav from "../components/CardRav";
import CardHuff from "../components/CardHuff";
import CardSly from "../components/CardSly";

/* tableau pour tester mon filtre par name */
const characters = [
  {
    name: "Harry Potter",
    id: Date.now(),
    house: "Gryffindor",
    ancestry: "half-blood",
    image: "https://ik.imagekit.io/hpapi/harry.jpg",
  },
  {
    name: "Lily Potter",
    id: Date.now(),
    house: "Slytherin",
    ancestry: "half-blood",
    image: "https://ik.imagekit.io/hpapi/harry.jpg",
  },
  {
    name: "James Potter",
    id: Date.now(),
    house: "Gryffindor",
    ancestry: "half-blood",
    image: "https://ik.imagekit.io/hpapi/harry.jpg",
  },
  {
    name: "Albus Severus Potter",
    id: Date.now(),
    house: "Gryffindor",
    ancestry: "half-blood",
    image: "https://ik.imagekit.io/hpapi/harry.jpg",
  },
  {
    name: "Hafsa Potter",
    id: Date.now(),
    house: "Gryffindor",
    ancestry: "half-blood",
    image: "https://ik.imagekit.io/hpapi/harry.jpg",
  },
];

export default function Inventory() {
  const [inventory, setInventory] = useState(characters);
  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase();
    if (search !== "") {
      setInventory(
        characters.filter((character) => {
          return character.name.toLowerCase().includes(search);
        })
      );
    } else {
      setInventory(characters);
    }
  };
  return (
    <section className="flex flex-col items-center space-y-8 ">
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="text-xl">Card inventory</h2>
        <div className="flex gap-4">
          <SearchBar handleSearch={handleSearch} />
          <FilterBtn />
        </div>
      </div>
      <div>
        {inventory.map((character, id) => (
          <CreateCard key={id} name={character.name} />
        ))}
        <CardGryf />
        <CardRav />
        <CardHuff />
        <CardSly />
      </div>
    </section>
  );
}
