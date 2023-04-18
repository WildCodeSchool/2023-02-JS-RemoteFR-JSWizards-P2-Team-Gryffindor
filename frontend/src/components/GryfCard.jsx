export default function GryfCard() {
  return (
    <div className="relative bg-lightmode dark:bg-dark rounded-xl drop-shadow w-[180px]">
      <img
        className="object-cover object-center w-full max-h-[120px] rounded-t-xl"
        src=""
        alt=""
      />
      <div className="space-y-2 px-3 pt-1.5 pb-4">
        <div>
          <p className="text-dark dark:text-neutral text-base">name</p>
          <p className="text-xs text-dark25 dark:text-neutral/50">test</p>
        </div>
      </div>
    </div>
  );
}
