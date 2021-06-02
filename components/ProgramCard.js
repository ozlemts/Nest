import Link from "next/link";
import Button from "@/components/Button";
function ProgramCard(props) {
  return (
    <div className="border-2 rounded-lg px-8 py-5 w-80 my-4">
      <div className="flex flex-col items-center">
        <img
          src={props.type === "nest-by" ? "/nest-by.png" : "/nest-in.png"}
          className="w-24"
        />
        <Link href={props.program.url}>
          <img src={props.program.logo} className="my-8 h-12" />
        </Link>
        <p className="text-2xl text-gray-500 font-bold">{props.program.name}</p>
        <div className="text-blue-400 font-semibold">
          <p>{props.program.status}</p>
          <p>({props.program.duration})</p>
        </div>
      </div>
      <ul>
        {props.program.properties.map((e) => (
          <li className="flex font-semibold  justify-start items-start text-gray-500 dark:text-blue-200 my-3 ">
            <img src="/green-ok.svg" className="mt-2 mr-2" /> {e}
          </li>
        ))}
      </ul>
      <Button type="btn-secondary-ghost">İncele</Button>
    </div>
  );
}

export default ProgramCard;
