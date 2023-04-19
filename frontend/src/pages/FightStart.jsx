function FightStart() {
  setTimeout(() => {
    window.location.href = "./versus";
  }, 3000);
  return (
    <div className="fight-container">
      <div className="cards-container">
        <div className="container">
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
        <div className="container">
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
      </div>
    </div>
  );
}

export default FightStart;
