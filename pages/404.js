import Layout from "@/components/Layout";

function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <p className="text-2xl">{"404 | Sayfa Bulunamadı"}</p>
        <p className="text-xl mt-24">
          {"Aradığınız sayfa/içerik artık web sayfasında yer almamaktadır. "}
        </p>
      </div>
    </Layout>
  );
}

export default NotFound;
