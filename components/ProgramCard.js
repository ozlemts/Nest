import Link from "next/link";
import Button from "@/components/Button";

function ProgramCard(props) {
  return (
    <div className="border-2 border-gray-100 hover:border-red-400 dark:border-blue-400 bg-white dark:bg-blue-600 rounded-lg px-8 py-5 w-80 m-2 flex flex-col justify-between">
      <div className="flex flex-col items-center text-center">
        <div className="h-12">
          <img
            src={
              props.program.type === "nest-by" ? "/nest-by.png" : "/nest-in.png"
            }
            className="w-24 dark:hidden"
          />
          <img
            src={
              props.program.type === "nest-by"
                ? "/nest-by-light.png"
                : "/nest-in-light.png"
            }
            className="w-24 hidden dark:block"
          />
        </div>
        <Link href={props.program.url}>
          <img src={props.program.logo[0].url} className="my-8 h-12" />
        </Link>
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
      <ul className="h-52">
        {props.program.properties.map((e, index) => (
          <li
            className="flex font-semibold justify-start items-start text-gray-500 dark:text-blue-200 my-3 text-left"
            key={index}
          >
            <img src="/green-ok.svg" className="mt-2 mr-2" />
            <span>{e}</span>
          </li>
        ))}
      </ul>
      <a href={`/programs/${props.program.id}`}>
        <Button type="btn-secondary-ghost">İncele</Button>
      </a>
    </div>
  );
}

export default ProgramCard;
