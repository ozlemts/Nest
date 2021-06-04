import Link from "next/link";

function BlogCard(props) {
  return (
    <div className="rounded-lg px-8 shadow-lg w-96 text-left">
      <img src="/sample.png" className="w-full" />
      <div className="p-5 ">
        <p className="text-xl font-bold my-4">It is a long established </p>
        <p className="text-gray-400">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that....
        </p>
        <div className="flex justify-between mt-3">
          <p>20 Mayıs 2021</p>
          <div className="font-bold">
            <Link href="https://blog.viveka.com.tr/">Daha Fazla</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
