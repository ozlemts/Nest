import { useRouter } from "next/router";
import Layout from "@/components/Layout";

function ProgramPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return (
    <Layout>
      <div className="mt-44">
        <h1>The Project Page of Nest</h1>
        <div className="w-72">
          <p className="text-2xl font-bold"> Amaç</p>
          <p className="w-1/2">
            Duis eu velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Morbi efficitur
            auctor metus, id mollis lorem pellentesque id. Nullam posuere
            maximus dui et fringilla.{" "}
          </p>
          <p className="text-2xl font-bold"> Kapsam</p>
          <p className="">
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
