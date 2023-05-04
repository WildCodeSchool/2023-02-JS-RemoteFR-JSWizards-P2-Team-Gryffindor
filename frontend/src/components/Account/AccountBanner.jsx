export default function AccountBanner() {
  return (
    <div className="flex justify-center gap-4">
      <div className="flex flex-col gap-3 items-center">
        <img src="./image/Gryf-banner.png" alt="Gryffindor banner" />
        <p>12</p>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <img src="./image/Huff-banner.png" alt="Hyfflepuff banner" />
        <p>10</p>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <img src="./image/Raven-banner.png" alt="Ravenclaw banner" />
        <p>8</p>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <img src="./image/Slyth-banner.png" alt="Slytherin banner" />
        <p>23</p>
      </div>
    </div>
  );
}
