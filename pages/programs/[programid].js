import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { getTable } from "/pages/api/airtable";

function ProgramPage({ programdata }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <div className="mt-36">
        <div className="custom-container flex justify-between flex-wrap">
          <p className="font-bold text-red-500 my-8">
            Programlar > {programdata.name}
          </p>
          <div>
            <a href="https://twitter.com/intent/tweet?url=https://nest-five.vercel.app/programs/cococola">
              <img src="/moon.svg" className="h-6" />
            </a>
          </div>
        </div>
        <div className="relative mt-24 flex justify-center">
          <div className="program-summary border border-gray-200 absolute lg:p-12 lg:mx-24 flex justify-center items-center flex-wrap lg:rounded-xl lg:p-4 shadow-lg  bg-white dark:bg-blue-500 dark:text-blue-200">
            <div className="lg:max-w-md lg:mx-8">
              <p className="text-xl font-bold">{programdata.longname}</p>
              <p>{programdata.description}</p>
            </div>
            <img src="/line.svg" className="hidden md:block" />
            <div className="lg:max-w-md lg:mx-8 my-4">
              <img src="/nest-by.png" className="h-20 mx-6" />
            </div>
            <div className="lg:max-w-md lg:mx-8 my-4">
              <img src={programdata.logo[0].url} className="h-20 mx-6" />
            </div>
          </div>
          <img
            src={programdata.cover[0].url}
            className="w-full program-cover object-cover"
          />
        </div>

        <div className="flex flex-col justify-center w-full custom-container mt-5 text-center lg:px-80">
          <div className="">
            <p className="mt-4"> Burada {programdata.description}</p>
            <p className="text-2xl font-bold mt-8"> Amaç</p>
            <p className="mt-4">{programdata.aim}</p>
            <p className="text-2xl font-bold mt-8"> Kapsam</p>
            <p className="mt-4">{programdata.scope}</p>
          </div>
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
  let data = await getTable("programs");
  data = data.filter((o) => o.fields.id === params.programid);
  const programdata = data[0].fields;

  return {
    props: { programdata },
  };
}

export default ProgramPage;
