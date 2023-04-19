import CreateCard from "@components/CreateCard";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterBtn from "../components/FilterBtn";
// import CardGryf from "../components/CardGryf";
// import CardRav from "../components/CardRav";
// import CardHuff from "../components/CardHuff";
// import CardSly from "../components/CardSly";

/* tableau pour tester mon filtre par name */
const characters = [
  {
    name: "Harry Potter",
    id: 1,
    house: "Gryffindor",
    ancestry: "half-blood",
    image: "https://ik.imagekit.io/hpapi/harry.jpg",
  },
  {
    name: "Lily Potter",
    id: 2,
    house: "Slytherin",
    ancestry: "half-blood",
    image: "https://ik.imagekit.io/hpapi/harry.jpg",
  },
  {
    name: "James Potter",
    id: 3,
    house: "Ravenclaw",
    ancestry: "pure-blood",
    image: "https://ik.imagekit.io/hpapi/harry.jpg",
  },
  {
    name: "Albus Severus Potter",
    id: 4,
    house: "Hufflepuff",
    ancestry: "muggleborn",
    image: "https://ik.imagekit.io/hpapi/harry.jpg",
  },
  {
    name: "Hafsa Potter",
    id: 5,
    house: "Gryffindor",
    ancestry: "muggleborn",
    image: "https://ik.imagekit.io/hpapi/harry.jpg",
  },
];

export default function Inventory() {
  const [inventory, setInventory] = useState(characters);
  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase();
    const nameSearch = characters.filter((character) => {
      return character.name.toLowerCase().includes(search);
    });
    const houseSearch = characters.filter((character) => {
      return character.house.toLowerCase().includes(search);
    });
    const ancestrySearch = characters.filter((character) => {
      return character.ancestry.toLowerCase().includes(search);
    });
    nameSearch.filter((character) =>
      character.name.toLowerCase().includes(search)
        ? setInventory(nameSearch)
        : setInventory(characters)
    );
    ancestrySearch.filter((character) =>
      character.ancestry.toLowerCase().includes(search)
        ? setInventory(ancestrySearch)
        : setInventory(characters)
    );
    houseSearch.filter((character) =>
      character.house.toLowerCase().includes(search)
        ? setInventory(houseSearch)
        : setInventory(characters)
    );
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
        {inventory.map((character) => (
          <CreateCard key={character.id} name={character.name} />
        ))}
        {/* <CardGryf />
        <CardRav />
        <CardHuff />
        <CardSly /> */}
      </div>
    </section>
  );
}
