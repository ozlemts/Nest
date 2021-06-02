import Layout from "@/components/Layout";
import Link from "next/link";
import ProgramCard from "@/components/ProgramCard";
import Button from "@/components/Button";

const programs = [
  {
    type: "nest-in",
    url: "",
    logo: "/moon.svg",
    name: "Coco Cola",
    status: "Tamamlandı",
    duration: "2021-2022",
    properties: [
      "Konsept geliştirme",
      "Fikir ve müşteri doğrulama ",
      "Landing page ve kullanıcı arayüzü",
      "MVP/Prototip/Demo üretme ve müşteri lead toplama",
      "Eğitim ve mentorluklar",
      "Sunum ve değerlendirme",
    ],
  },
  {
    type: "nest-in",
    url: "",
    logo: "",
    name: "",
    status: "",
    duration: "",
    properties: ["sjadga", "dsfnjkh"],
  },
];
function ProgramsPage() {
  return (
    <Layout>
      <div className="text-center">
        <p className="text-3xl font-bold">Programlar</p>
        <p className="mt-4">
          Şu an devam eden programlarımızı ve tamamlanmış programlarımızı
          inceleyebilirsiniz.
        </p>
        <div className="flex space-x-4 my-8">
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
      <div className="flex flex-wrap justify-between">
        <ProgramCard program={programs[0]} />
        <ProgramCard program={programs[0]} />
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
