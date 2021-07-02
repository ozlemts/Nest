import Layout from "@/components/Layout";
import ProgramCard from "@/components/ProgramCard";
import Button from "@/components/Button";
import { getTable } from "/pages/api/airtable";
import { useState } from "react";

function ProgramsPage({ data }) {
  const [filter, setFilter] = useState("");

  const handleFilters = (e, filter) => {
    if (
      filter == "Hackhathon" ||
      filter == "Idehathon" ||
      filter == "Ön Kuluçka"
    )
      return e.fields.module.includes(filter);
    else if (filter == "Tamamlandı" || filter == "Devam Ediyor") {
      return e.fields.status.includes(filter);
    } else if (filter == "nest-by" || filter == "nest-in") {
      return e.fields.type.includes(filter);
    } else return e.fields;
  };

  return (
    <Layout>
      {data.length > 0 && (
        <div className="custom-container text-center mt-36">
          <p className="text-3xl font-bold">Programlar</p>
          <p className="mt-4">
            Şu an devam eden programlarımızı ve tamamlanmış programlarımızı
            inceleyebilirsiniz.
          </p>
          <div className="flex justify-center flex-wrap my-8">
            <Button type="btn-tab" onClick={() => setFilter("")}>
              Tüm Programlar
            </Button>
            <Button type="btn-tab" onClick={() => setFilter("Devam Ediyor")}>
              Devam Edenler
            </Button>
            <Button type="btn-tab" onClick={() => setFilter("Tamamlandı")}>
              Tamamlananlar
            </Button>
            <Button type="btn-tab" onClick={() => setFilter("nest-by")}>
              Nest-By
            </Button>
            <Button type="btn-tab" onClick={() => setFilter("nest-in")}>
              Nest-In
            </Button>
            <Button type="btn-tab" onClick={() => setFilter("Hackhathon")}>
              Hackhaton
            </Button>
            <Button type="btn-tab" onClick={() => setFilter("Idehathon")}>
              Ideathon
            </Button>
            <Button type="btn-tab" onClick={() => setFilter("Ön Kuluçka")}>
              Ön Kuluçka
            </Button>
          </div>
          <div className="flex flex-wrap justify-center">
            {data
              .filter((p) => handleFilters(p, filter))
              .map((p, index) => (
                <ProgramCard key={index} program={p.fields} />
              ))}
          </div>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getTable("programs");

  return {
    props: {
      data: data,
    },
    revalidate: 600,
  };
}

export default ProgramsPage;
