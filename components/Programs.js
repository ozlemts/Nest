import Button from "@/components/Button";
import Link from "next/link";

function Programs() {
  return (
    <section id="programs" className="text-center w-full">
      <p className="text-3xl font-bold">Programlar</p>
      <p>
        Şu an devam eden programlarımızı ve tamamlanmış programlarımızı
        inceleyebilirsiniz.
      </p>
      <div className="my-6 text-center">
        <Link href="/programs">
          <Button type="btn-primary" shadow>
            {" "}
            Programların Tamamı İçin
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Programs;
