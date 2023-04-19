function Versus() {
  return (
    <div className="versus-container">
      <div className="cards-container">
        <div className="container">
          <div className="img-potions">
            <div className="potions">
              <p>Potion 1</p>
              <p>Potion 2</p>
              <p>Potion 3</p>
            </div>

            <div className="card">
              <img
                src="https://images.indianexpress.com/2020/04/harrypotter-filephoto-759.jpg"
                alt="left card"
              />

              <div className="characteristics">
                <h2>Harry Potter</h2>
                <h3>Gryffindor wizard</h3>
              </div>
            </div>
          </div>
          <div className="spells">
            <p>spells</p>
            <p>spells</p>
            <p>spells</p>
            <p>spells</p>
          </div>
        </div>

        <div className="container">
          <div className="img-potions potions-2">
            <div className=" potions">
              <p>Potion 1</p>
              <p>Potion 2</p>
              <p>Potion 3</p>
            </div>
            <div className="card">
              <img
                src="https://images.indianexpress.com/2020/04/harrypotter-filephoto-759.jpg"
                alt="right card"
              />

              <div className="characteristics">
                <h2>Harry Potter</h2>
                <h3>Gryffindor wizard</h3>
              </div>
            </div>
          </div>
          <div className="spells spells-2">
            <p>spells</p>
            <p>spells</p>
            <p>spells</p>
            <p>spells</p>
          </div>
        </div>
      </div>
      <div className="abandon-btn">
        <button type="button">Abandon</button>
      </div>
    </div>
  );
}

export default Versus;
