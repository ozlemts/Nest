import Layout from "@/components/Layout";
import EventCard from "@/components/EventCard";
import Button from "@/components/Button";
import { getTable } from "/pages/api/programs";

function EventsPage({ data }) {
  return (
    <Layout>
      {data.length > 0 && (
        <div className="custom-container text-center mt-36">
          <p className="text-3xl font-bold">Etkinlikler</p>
          <p className="mt-4">
            Şu an devam eden etkinliklerimizi ve tamamlanmış etkinliklerimizi
            inceleyebilirsiniz.
          </p>
          <div className="flex flex-wrap justify-center">
            {data.map((e, index) => (
              <EventCard key={index} event={e.fields} />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getTable("Events");
  return {
    props: {
      data: data,
    },
    revalidate: 600,
  };
}

export default EventsPage;
