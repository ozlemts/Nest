import Button from "@/components/Button";
import Link from "next/link";
import ProgramCard from "@/components/ProgramCard";

function Programs() {
  const highlightedPrograms = [
    {
      id: "cococola",
      logo: "/ref/dark-cococola.png",
      url: "/",
      name: "Cococola",
      type: "nest-in",
      status: "Tamamlandı",
      duration: "2019-2020",
      properties: [
        "Yenilikçi teknoloji ve fikirlere erişim",
        "Dış kaynak kullanımı ve yetkin insan kaynağına erişim",
        "İtibar, PR ve kanaat önderliği",
      ],
    },
    {
      id: "cococola 2",
      logo: "/ref/dark-cococola.png",
      url: "/",
      name: "Cococola",
      type: "nest-in",
      status: "Tamamlandı",
      duration: "2019-2020",
      properties: [
        "Yenilikçi teknoloji ve fikirlere erişim",
        "Dış kaynak kullanımı ve yetkin insan kaynağına erişim",
        "İtibar, PR ve kanaat önderliği",
      ],
    },
    {
      id: "cococola 3",
      logo: "/ref/dark-cococola.png",
      url: "/",
      name: "Cococola",
      type: "nest-in",
      status: "Tamamlandı",
      duration: "2019-2020",
      properties: [
        "Yenilikçi teknoloji ve fikirlere erişim",
        "Dış kaynak kullanımı ve yetkin insan kaynağına erişim",
        "İtibar, PR ve kanaat önderliği",
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
