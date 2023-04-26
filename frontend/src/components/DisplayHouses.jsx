function DisplayHouses() {
  return (
    <div className="houses-intro md:max-w-[1290px]">
      <div className="house">
        {" "}
        <img src="./image/Gryffindor.png" alt="Gryffindor" />
        <p>
          {" "}
          <span className="description">
            Gryffindor is known for valuing bravery, courage, chivalry, and
            daring. Its founder, Godric Gryffindor, believed that courage and
            determination were the most important qualities to possess, and
            thus, he sought to enroll students who demonstrated these traits.
          </span>{" "}
        </p>
      </div>
      <div className="house">
        {" "}
        <img src="./image/Hufflepuff.png" alt="Hufflepuff" />
        <p>
          {" "}
          <span className="description">
            Hufflepuff is known for valuing hard work, loyalty, patience, and
            fairness. Its founder, Helga Hufflepuff, believed that everyone
            should be given an equal chance, regardless of their background or
            abilities.{" "}
          </span>{" "}
        </p>
      </div>
      <div className="house">
        {" "}
        <img src="./image/Ravenclaw.png" alt="Ravenclaw" />
        <p>
          {" "}
          <span className="description">
            Ravenclaw is known for valuing intelligence, wit, creativity, and
            learning. Its founder, Rowena Ravenclaw, believed that those who
            possessed a keen mind and a thirst for knowledge should be valued
            above all else.
          </span>{" "}
        </p>
      </div>
      <div className="house">
        {" "}
        <img src="./image/Slytherin.png" alt="Slytherin" />
        <p>
          {" "}
          <span className="description">
            Slytherin is known for valuing ambition, cunning, resourcefulness,
            and determination. Its founder, Salazar Slytherin, believed that
            those who possess these traits would be the most successful and
            powerful.
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default DisplayHouses;
