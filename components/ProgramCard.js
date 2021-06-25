import Link from "next/link";
import Button from "@/components/Button";

function ProgramCard(props) {
  const link = "/programs/" + props.program.id;

  return (
    <div className="border-2 border-gray-100 dark:border-blue-400 bg-white dark:bg-blue-600 rounded-lg px-8 py-5 w-80 m-2">
      <div className="flex flex-col items-center text-center">
        <img
          src={props.type === "nest-by" ? "/nest-by.png" : "/nest-in.png"}
          className="w-24"
        />
        <Link href={props.program.url}>
          <img
            src={props.program.logo ? props.program.logo[0].url : "/moon.svg"}
            className="my-8 h-12"
          />
        </Link>
        <p className="text-2xl text-gray-500 dark:text-blue-100 font-semibold">
          {props.program.name}
        </p>
        <div className="text-blue-400 dark:text-blue-300 font-semibold">
          <p>{props.program.status}</p>
          <p>({props.program.duration})</p>
        </div>
      </div>
      <ul className="h-52">
        {props.program.properties.map((e, index) => (
          <li
            className="flex font-semibold  justify-start items-start text-gray-500 dark:text-blue-200 my-3"
            key={index}
          >
            <img src="/green-ok.svg" className="mt-2 mr-2" /> {e}
          </li>
        ))}
      </ul>
      <Link href={link ? "/programs" : "link"}>
        <Button type="btn-secondary-ghost">İncele</Button>
      </Link>
    </div>
  );
}

export default ProgramCard;
