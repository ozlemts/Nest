import Button from "@/components/Button";
import Layout from "@/components/Layout";

function Programs() {
  return (
    <section id="programs" className="text-center w-full">
      <p className="text-3xl font-bold">Programlar</p>
      <p>
        Şu an devam eden programlarımızı ve tamamlanmış programlarımızı
        inceleyebilirsiniz.
      </p>
      <div className="my-6 text-center">
        <Button type="btn-primary"> Programların Tamamı İçin</Button>
      </div>
    </section>
  );
}

export default Programs;
