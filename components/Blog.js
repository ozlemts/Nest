import Button from "@/components/Button";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";

const BlogData = [
  {
    title: "Covid-19 Sonrası Hızla Değişen Girişimcilik Trendleri",
    url: "https://blog.viveka.com.tr/covid-19-sonrasi-hizla-degisen-girisimcilik-trendleri/",
    description:
      "Covid-19 sonrası Girişimcilik alanında en çok ne gibi aksiyonlar alındığını, bu konuda önümüzdeki yıl bizi hangi trendlerin beklediğini ekibimizden Beril Karabulut yazdı.",
    date: "18 Aralık 2020",
    img_url:
      "https://blog.viveka.com.tr/content/images/size/w2000/2020/12/pexels-photo-56759.jpeg",
  },
  {
    title: "İnovasyona Haiku Yaklaşımı: Tasarım Sprint",
    url: "https://blog.viveka.com.tr/inovasyon-da-haiku-yaklasimi-tasarim-sprint/",
    description:
      "Tasarım sprint, IDEO ve Dschool işbirliği ile Google Ventures içerisinde geliştirilen tasarımsal düşünce süreçleri ile çevik proje geliştirme süreçlerinin birleşimidir. Google Ventures  bu süreci Jake Knapp, John Zeratsky ve Braden Kowitz tarafından popüler hale getirmiştir. ",
    date: "29 Ocak 2021",
    img_url:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ",
  },
  {
    title:
      "Mülteci Girişimciliğini Tanımlamak: Türkiye’de Suriyeli Girişimciler",
    url: "https://blog.viveka.com.tr/multeci-girisimciligini-tanimlamak-turkiyede-suriyeli-girisimciler/",
    description:
      "6,7 milyonluk mülteci nüfusu ile Suriye krizi dünyanın gördüğü en büyük mülteci krizlerinden biri. 2011 yılından beri sayıları zamanla artan 6.7 milyon kişi zorunlu olarak göç ettikleri ülkelerde yaşamlarını farklı şekillerde idame ettirmeye çalışıyorlar.",
    date: "16 Ocak 2020",
    img_url:
      "https://blog.viveka.com.tr/content/images/size/w2000/2020/01/1920-1.jpg",
  },
  {
    title:
      "Kadın Girişimcinin Gözünden: Bize yine meşakkatli toplumsal cinsiyet yolları",
    url: "https://blog.viveka.com.tr/kadingirisimciningozunden/",
    description:
      "‘UN Women’ın yürüttüğü araştırmalar gösterdi ki 2020 boyunca ve hala devam eden Covid-19’tan kadınlar erkeklerden daha olumsuz yönde etkileniyor’. Bu haberi okuyunca gülümseyip ‘Hangi konuda daha az etkileniyor ki zaten’ demiştim içimden.",
    date: "7 Mayıs 2021",
    img_url:
      "https://blog.viveka.com.tr/content/images/size/w2000/2021/05/diverse-women-illustration.jpeg",
  },
];

function Blog() {
  return (
    <section
      id="blog"
      className="text-center w-full mt-24 px-0 dark:text-blue-200"
    >
      <p className="text-3xl font-bold my-12">Blog</p>
      <div>
        <div className="shadow-lg flex flex-wrap rounded dark:bg-blue-500">
          <div className="lg:w-3/5 p-8 text-left">
            <p className="text-2xl font-bold dark:text-blue-100">
              {BlogData[0].title}
            </p>
            <p className="mt-8 text-gray-400">{BlogData[0].description}</p>
            <div className="flex justify-between mt-3">
              <p>{BlogData[0].date}</p>
              <div className="font-bold">
                <Link href={BlogData[0].url}>Daha Fazla</Link>
              </div>
            </div>
          </div>
          <img
            src={BlogData[0].img_url}
            className="lg:w-2/5 h-72 object-cover"
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-4 my-8">
          <BlogCard blogdata={BlogData[1]} />
          <BlogCard blogdata={BlogData[2]} />
          <BlogCard blogdata={BlogData[3]} />
        </div>
        <div className="my-6 text-center">
          <Button type="btn-primary" shadow>
            {"Daha Fazlası İçin "}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Blog;
