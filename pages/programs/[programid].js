import useSWR from 'swr'
import { useRouter } from "next/router";
import Layout from "@/components/Layout";


function ProgramPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  const fetcher = (url) => fetch(url).then(res => res.json())

  const { data, error } = useSWR(`https://jsonplaceholder.typicode.com/todos/1`, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Layout>
      <div className="text-center mx-auto max-w-2xl">
        <h1>{router.query.programname}</h1>m
        <div className="">
          <p className="text-2xl font-bold mt-8">hello {data.title}!</p>
          <p className="mt-4">
            Duis eu velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Morbi efficitur
            auctor metus, id mollis lorem pellentesque id. Nullam posuere
            maximus dui et fringilla.{" "}
          </p>
          <p className="text-2xl font-bold mt-8"> Kapsam</p>
          <p className="mt-4">
            Duis eu velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Morbi efficitur
            auctor metus, id mollis lorem pellentesque id. Nullam posuere
            maximus dui et fringilla.{" "}
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default ProgramPage;
