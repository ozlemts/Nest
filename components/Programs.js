import Button from "@/components/Button";
import Link from "next/link";
import ProgramCard from "@/components/ProgramCard";

function Programs() {
  const highlightedPrograms = [
    {
      id: "kizilay",
      logo: [{ url: "/ref/dark-kizilay.png" }],
      url: "/",
      name: "Kızılay Girişimcilik Destek Projesi 2. Dönem",
      type: "nest-by",
      status: "Tamamlandı",
      duration: "2020",
      properties: [
        "Yenilikçi fikirlere erişim",
        "İş kurmak isteyenlere eğitim ve mentorluklar sonrası finansal destek",
        "Sosyal ve ekonomik uyuma katkı",
      ],
    },
    {
      id: "cococola",
      logo: [{ url: "/ref/dark-cococola.png" }],
      url: "/",
      name: "Coca-Cola ve Habitat Derneği Hackathonu",
      type: "nest-by",
      status: "Tamamlandı",
      duration: "2020",
      properties: [
        "Yenilikçi teknoloji ve fikirlere erişim",
        "Dış kaynak kullanımı ve yetkin insan kaynağına erişim",
        "İtibar, PR ve kanaat önderliği",
      ],
    },
    {
      id: "picus",
      logo: [{ url: "/ref/dark-cococola.png" }],
      url: "/",
      name: "Picus Onboarding Sprint",
      type: "nest-in",
      status: "Tamamlandı",
      duration: "2019",
      properties: [
        "Yenilikçi fikirler geliştirme",
        "Yeni çalışanların hızlı adaptasyonu",
        "Kurumsal aidiyet",
      ],
    },
  ];
  return (
    <section id="programs" className="text-center w-full">
      <p className="text-3xl font-bold mb-6">Programlar</p>
      <p>
        Şu an devam eden programlarımızı ve tamamlanmış programlarımızı
        inceleyebilirsiniz.
      </p>
      <div className="flex flex-wrap justify-center my-12">
        {highlightedPrograms.map((p, index) => (
          <ProgramCard key={index} program={p} />
        ))}
      </div>
      <div className="my-6 text-center">
        <Link href="/programs">
          <Button type="btn-primary" shadow>
            {"Programların Tamamı İçin "}
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Programs;
