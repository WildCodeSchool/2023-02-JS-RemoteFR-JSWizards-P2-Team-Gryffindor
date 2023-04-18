export default function CardRav() {
  return (
    <div className="relative rounded-xl">
      <img
        className="relative object-cover object-center w-[184px] h-[265px] rounded-xl shadow-sm"
        src="./public/image/RavCard.png"
        alt=""
      />
      <img
        className="absolute top-3 left-3 object-cover w-[160px] h-[210px] rounded-t-md"
        src="./public/image/Harry.jpg"
        alt=""
      />
      <img
        className="absolute bottom-2 right-1 w-10 h-10"
        src="./public/icon/rav-logo.svg"
        alt=""
      />
      <p className="absolute bottom-3 left-3">Harry Potter</p>
    </div>
  );
}
