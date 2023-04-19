function CreateCard(props) {
  return (
    <div className="relative rounded-xl">
      <img
        className="relative object-cover object-center w-[184px] h-[265px] rounded-xl shadow-sm"
        src="./public/image/CardGryf.png"
        alt="Gryffindor Card background"
      />
      <img
        className="absolute top-3 left-3 object-cover w-[160px] h-[210px] rounded-t-md"
        src="./public/image/Harry.jpg"
        alt="Harry potter"
      />
      <img
        className="absolute bottom-2 right-1 w-10 h-10"
        src="./public/icon/gryf-logo.svg"
        alt="Gryffindor logo"
      />
      <p className="absolute bottom-3 left-3">{props.name}</p>
    </div>
  );
}

export default CreateCard;
