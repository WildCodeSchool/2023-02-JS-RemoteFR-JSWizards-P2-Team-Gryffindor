export default function HousesCards() {
  return (
    <>
      <h1 className="house-choice">Choose your house</h1>
      <h2 className="select-house">
        Select the house you want to be in for your fight, your character will
        depend of the house you pick
      </h2>
      <div className="houses-intro">
        <div className="house">
          {" "}
          <input type="checkbox" id="gryffindor" />
          <label htmlFor="gryffindor">
            <img
              src="https://media.discordapp.net/attachments/1093197130493067354/1095714398221369395/Gryffindor_house_crest__Fanart_now_available_on_Threadless.png?width=446&height=670"
              alt="Gryffindor"
            />
            <p className="character">
              Justice, brave, courageous, protector and daring.
            </p>
          </label>
        </div>
        <div className="house">
          {" "}
          <input type="checkbox" id="hufflepuff" />
          <label htmlFor="hufflepuff">
            <img
              src="https://media.discordapp.net/attachments/1093197130493067354/1095714398812782652/Hufflepuff_house_crest__Fanart_now_available_on_Threadless.png?width=446&height=670"
              alt="Hufflepuff"
            />
            <p className="character">
              Humble, loyal and unassuming, fairness and impartiality.
            </p>
          </label>
        </div>
        <div className="house">
          {" "}
          <input type="checkbox" id="ravenclaw" />
          <label htmlFor="ravenclaw">
            <img
              src="https://media.discordapp.net/attachments/1093197130493067354/1095714399521603604/Ravenclaw_house_crest__Fanart_now_available_on_Threadless.png?width=446&height=670"
              alt="Ravenclaw"
            />
            <p className="character">
              Analytical and logical, love of learning and intellectual
              curiosity.{" "}
            </p>
          </label>
        </div>
        <div className="house">
          {" "}
          <input type="checkbox" id="slytherin" />
          <label htmlFor="slytherin">
            <img
              src="https://media.discordapp.net/attachments/1093197130493067354/1095714400322719814/Slytherin_house_crest__Fanart_now_available_on_Threadless.png?width=446&height=670"
              alt="Slytherin"
            />
            <p className="character">
              Strategic, calculating, strong sens of self-preservation.
            </p>
          </label>
        </div>
      </div>
    </>
  );
}
