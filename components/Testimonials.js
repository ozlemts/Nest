function Testimonials() {
  return (
    <section id="testimonials" className="text-center w-full mt-24">
      <p className="text-3xl font-bold">Paydaşlarımızın Görüşleri</p>
      <div className="flex">1,2,3</div>
      <div className="flex justify-between items-center">
        <img src="three-dot.svg" />
        <div className="flex justify-center items-center">
          <img src="left-arrow.svg" className="mr-2" />
          <img src="left-arrow.svg" />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
