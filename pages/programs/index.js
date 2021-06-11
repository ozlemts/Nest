import Layout from "@/components/Layout";
import ProgramCard from "@/components/ProgramCard";
import Button from "@/components/Button";
import { getTable } from "/pages/api/programs";

function ProgramsPage({ data }) {
  return (
    <Layout>
      <div className="custom-container text-center">
        <p className="text-3xl font-bold">Programlar</p>
        <p className="mt-4">
          Şu an devam eden programlarımızı ve tamamlanmış programlarımızı
          inceleyebilirsiniz.
        </p>
        <div className="flex justify-center flex-wrap my-8">
          <Button type="btn-tab">Tüm Programlar</Button>
          <Button type="btn-tab">Devam Edenler</Button>
          <Button type="btn-tab">Tamamlananlar</Button>
          <Button type="btn-tab">Nest-By</Button>
          <Button type="btn-tab">Nest-in</Button>
          <Button type="btn-tab">Hackhaton</Button>
          <Button type="btn-tab">Ideathon</Button>
          <Button type="btn-tab">Ön Kuluçka</Button>
        </div>
      </div>
      {data.length > 0 && (
        <div className="flex flex-wrap justify-center">
          {data.map((p, index) => (
            <ProgramCard key={index} program={p.fields} />
          ))}
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
