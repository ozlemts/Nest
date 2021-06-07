import Layout from "@/components/Layout";
import Link from "next/link";
import ProgramCard from "@/components/ProgramCard";
import Button from "@/components/Button";

const programs = [
  {
    name: "Coco Cola",
    type: "nest-in",
    url: "",
    logo: "/moon.svg",
    darklogo: "/moon.svg",
    status: "Tamamlandı",
    duration: "2021-2022",
    properties:
      "Konsept geliştirme,Landing page ve kullanıcı arayüzü,MvP/Prototip/Demo üretme ve müşteri lead toplama",
  },
  {
    name: "Coco Cola",
    type: "nest-in",
    url: "https://viveka.com.tr/",
    logo: "cola.svg (https://dl.airtable.com/.attachments/1c1f35c0edc86a14bef36f6f931ac420/b6b9d32a/cola.svg)",
    darklogo:
      "cola.svg (https://dl.airtable.com/.attachments/9238cb142b0e258d620a530d2573a279/7787d948/cola.svg)",
    status: "Tamamlandı",
    duration: "2010-2011",
    properties:
      "Konsept geliştirme,Landing page ve kullanıcı arayüzü,MvP/Prototip/Demo üretme ve müşteri lead toplama",
    aim: "Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. \n\nMorbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.",
    scope:
      "Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. \n\nMorbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.",
    partners: "odtu,izmiryuksekteknoloji",
    output: "Yenilikçi Bakış Açısı,Sistemetik Yaklaşım",
    tags: "product,MVP",
  },
];

programs.forEach((e) => {
  e.properties = e.properties.split(",");
  e.logo = e.logo.replace(/.*\(|\).*/g, "");
});
function ProgramsPage() {
  return (
    <Layout>
      <div className="text-center">
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
      <div className="flex flex-wrap justify-center">
        <ProgramCard program={programs[0]} />
        <ProgramCard program={programs[1]} />
        <ProgramCard program={programs[0]} />
        <ProgramCard program={programs[0]} />
        <ProgramCard program={programs[0]} />
        <ProgramCard program={programs[0]} />
        <ProgramCard program={programs[0]} />
        <ProgramCard program={programs[0]} />
      </div>
    </Layout>
  );
}

export default ProgramsPage;
