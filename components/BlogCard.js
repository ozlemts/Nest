import Link from "next/link";

function BlogCard(props) {
  return (
    <div className="rounded-lg shadow-lg hover:shadow w-96 text-left dark:bg-blue-500">
      <img src={props.blogdata.img_url} className="w-full h-56 object-cover" />
      <div className="p-5 flex flex-col justify-between h-96">
        <p className="text-xl font-bold my-4 dark:text-blue-100">
          {props.blogdata.title}
        </p>
        <p className="text-gray-400">{props.blogdata.description}</p>
        <div className="flex justify-between mt-3">
          <p>{props.blogdata.date}</p>
          <div className="font-bold">
            <Link href={props.blogdata.url}>
              <p className="hover:text-red-500">Daha Fazla</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
