import Button from "@/components/Button";

function ProgramMiniCard(props) {
  return (
    <div className="block md:flex justify-center items-center my-12 lg:pr-24">
      <div className="w-80 lg:mx-2">
        <p className="text-2xl text-left">
          Programın Donöre <br />
          Faydaları
        </p>
        <ul className="my-6">
          {props.program.advantages.map((e, index) => (
            <li className="flex text-left items-start my-3 mr-1">
              <img src="/rounded-ok.svg" className="m-1" />
              <p>{e}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-2 border-red-400 dark:border-blue-400 bg-white dark:bg-blue-600 rounded-lg px-8 py-5 w-80 m-2">
        <div className="flex flex-col items-center text-center">
          <img src={props.program.logo} className="my-8 h-12" />
          <p className="text-2xl text-blue-500 dark:text-white font-semibold">
            {props.program.name}
          </p>
          <div className="text-blue-400 dark:text-blue-300 font-semibold">
            <p
              className={
                props.program.status === "Tamamlandı"
                  ? "text-red-300"
                  : "text-green-500"
              }
            >
              {props.program.status}
            </p>
            <p>({props.program.duration})</p>
          </div>
        </div>
        <a href={`/programs/${props.program.id}`}>
          <Button type="btn-secondary-ghost">İncele</Button>
        </a>
      </div>
    </div>
  );
}

export default ProgramMiniCard;
