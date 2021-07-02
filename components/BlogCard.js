function BlogCard(props) {
  return (
    <div className="rounded-lg shadow-lg hover:shadow text-left dark:bg-blue-500 flex flex-col justify-between">
      <img src={props.blogdata.img_url} className="w-full h-56 object-cover" />
      <div className="p-5 flex flex-col justify-between">
        <p className="text-xl font-bold my-4 dark:text-blue-100">
          {props.blogdata.title}
        </p>
        <p className="text-gray-400">{props.blogdata.description}</p>
        <div className="flex justify-between mt-3">
          <p>{props.blogdata.date}</p>
          <div className="font-bold">
            <a href={props.blogdata.url} target="_blank">
              <p className="hover:text-red-500">Daha Fazla</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
