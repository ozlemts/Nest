import Button from "@/components/Button";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";

function Blog() {
  return (
    <section
      id="blog"
      className="text-center w-full mt-24 lg:px-24 dark:text-blue-200"
    >
      <p className="text-3xl font-bold my-12">Blog</p>
      <div>
        <div className="shadow-lg flex flex-wrap rounded dark:bg-blue-500">
          <div className="lg:w-3/5 p-8 text-left">
            <p className="text-2xl font-bold dark:text-blue-100">
              Long established
            </p>
            <p className="mt-8 text-gray-400">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </p>
            <div className="flex justify-between mt-3">
              <p>20 Mayıs 2021</p>
              <div className="font-bold">
                <Link href="https://blog.viveka.com.tr/">Daha Fazla</Link>
              </div>
            </div>
          </div>
          <img src="/sample.png" className="lg:w-2/5" />
        </div>
        <div className="flex flex-wrap justify-between my-8">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="my-6 text-center">
          <Button type="btn-primary" shadow>
            {"Daha Fazlası İçin "}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Blog;
