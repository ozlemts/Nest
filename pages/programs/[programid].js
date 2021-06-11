import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { getTable } from "/pages/api/programs";

function ProgramPage({ cover }) {
  const router = useRouter();

  return (
    <Layout>
      <p className="font-bold text-red-500 ">Programlar > Coco Cola</p>
      <div className="text-center">
        <p>{router.query.programid}</p>
        <div className="">
          <p className="mt-4"> Burada {cover}</p>
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

export async function getStaticPaths() {
  const programs = await getTable("programs");

  const paths = programs.map((p) => {
    return {
      params: { programid: p.fields.id },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const data = await getTable("programs");
  const cover = data.filter((o) => o.fields.id === params.id);

  return {
    props: { cover },
  };
}

export default ProgramPage;
