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
    title: "Girişim Gelişim Döngüleri",
    url: "https://blog.viveka.com.tr/girisim-gelisim-donguleri/",
    description:
      "Sevgili Zoom`un yorgun savaşçıları...Uzaktan çalışmaya geçtiğimiz zamandan beri bir seneden fazla geçti. Geçirdiğimiz dönemin zorlukları ve ortak kayıplarımız gölgesinde yazı yazmak eskisinden biraz daha güç. ",
    date: "8 Haziran 2021",
    img_url:
      "https://blog.viveka.com.tr/content/images/size/w2000/2021/06/pexels-daniel-torobekov-4886378-1.jpg",
  },
  {
    title: "10 Saniye Yeni Ömür Uzunluğumuz Mu?",
    url: "https://blog.viveka.com.tr/yeni-omur-uzunlugu/",
    description:
      "Her geçen gün dikkatlerimiz daha da azalıyor, siz de farkında mısınız? Belki bu yazıyı okurken, belki bir film izlerken, belki sevdiklerimizle sohbet ederken..  2000’li yılların başlarında yetişkin bir insanın bir konuyla alakalı olarak dikkat süresi yaklaşık 12 saniye iken, son yıllarda bu süre 8 saniyeye indi.",
    date: "6 Haziran 2021",
    img_url:
      "https://blog.viveka.com.tr/content/images/size/w2000/2021/06/maxresdefault.jpeg",
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
      className="text-center w-full mt-24 lg:px-24 dark:text-blue-200"
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
        <div className="flex flex-wrap justify-between my-8">
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
