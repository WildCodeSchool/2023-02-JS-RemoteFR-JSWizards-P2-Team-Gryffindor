function DisplayHouses() {
  return (
    <div className="houses-intro">
      <div className="house">
        {" "}
        <img
          src="https://media.discordapp.net/attachments/1093197130493067354/1095714398221369395/Gryffindor_house_crest__Fanart_now_available_on_Threadless.png?width=446&height=670"
          alt="Gryffindor"
        />
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
        <img
          src="https://media.discordapp.net/attachments/1093197130493067354/1095714398812782652/Hufflepuff_house_crest__Fanart_now_available_on_Threadless.png?width=446&height=670"
          alt="Hufflepuff"
        />
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
        <img
          src="https://media.discordapp.net/attachments/1093197130493067354/1095714399521603604/Ravenclaw_house_crest__Fanart_now_available_on_Threadless.png?width=446&height=670"
          alt="Ravenclaw"
        />
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
        <img
          src="https://media.discordapp.net/attachments/1093197130493067354/1095714400322719814/Slytherin_house_crest__Fanart_now_available_on_Threadless.png?width=446&height=670"
          alt="Slytherin"
        />
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
