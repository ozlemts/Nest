import Layout from "@/components/Layout";
import EventCard from "@/components/EventCard";
import Button from "@/components/Button";
import { getTable } from "/pages/api/airtable";

function EventsPage({ data }) {
  return (
    <Layout>
      {data.length > 0 && (
        <div className="custom-container text-center mt-36 mb-12">
          <p className="text-3xl font-bold">Faaliyetler</p>
          <p className="mt-6">
            Şu an devam eden faaliyetlerimizi ve tamamlanmış faaliyetlerimizi
            inceleyebilirsiniz.
          </p>
          <div className="flex flex-wrap justify-center mt-8">
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
