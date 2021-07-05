function BlogCard(props) {
  return (
    <div className="rounded-lg shadow-lg hover:shadow w-96 text-left bg-white dark:bg-blue-500 m-4">
      <img
        src={props.event.img_url[0].url}
        className="w-full lg:h-48 object-cover dark:opacity-75"
      />
      <div className="p-5 flex flex-col justify-between h-96">
        <p className="text-xl font-bold my-4 dark:text-blue-100">
          {props.event.title}
        </p>
        <p className="text-gray-400 flex-grow text-sm lg:text-base">
          {props.event.description}
        </p>
        <div className="flex justify-between mt-3">
          <p>{props.event.date}</p>
          <div className="font-bold">
            <a href={props.event.url} target="_blank">
              <p className="hover:text-red-500">İncele</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
