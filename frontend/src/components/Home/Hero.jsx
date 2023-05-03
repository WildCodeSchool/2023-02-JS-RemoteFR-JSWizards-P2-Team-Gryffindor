export default function Hero() {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-white absolute text-center text-xl">
        Welcome to,
        <br />
        Hogwarts Magic Cards
      </h1>
      <img
        className="object-center object-cover max-h-96"
        src="./image/Hogwarts.png"
        alt="hogward castle"
      />
    </div>
  );
}
