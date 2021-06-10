import TestimonialCard from "@/components/TestimonialCard";

function Testimonials() {

  const testimonials = [
    {
      profile_pic:'https://www.adobe.com/express/create/media_141efea30cca217e8cb7fb3abb8ed9d663c29d550.jpeg?width=2000&format=webply&optimize=medium',
      name:'Ayten Yılmaz',
      company: 'Coca Cola',
      quote:'“Her kadının içinde bir girişimci ruhu olduğuna inanıyorum. İhtiyacımız olan; onu cesaretlendirmek, harekete geçirmek ve ikna etmektedir...”'
    },
    {
      profile_pic:'https://www.adobe.com/express/create/media_141efea30cca217e8cb7fb3abb8ed9d663c29d550.jpeg?width=2000&format=webply&optimize=medium',
      name:'Ayten Yılmaz',
      company: 'Coca Cola',
      quote:'“Her kadının içinde bir girişimci ruhu olduğuna inanıyorum. İhtiyacımız olan; onu cesaretlendirmek, harekete geçirmek ve ikna etmektedir...”'
    },
    {
      profile_pic:'https://www.adobe.com/express/create/media_141efea30cca217e8cb7fb3abb8ed9d663c29d550.jpeg?width=2000&format=webply&optimize=medium',
      name:'Ayten Yılmaz',
      company: 'Coca Cola',
      quote:'“Her kadının içinde bir girişimci ruhu olduğuna inanıyorum. İhtiyacımız olan; onu cesaretlendirmek, harekete geçirmek ve ikna etmektedir...”'
    },
    {
      profile_pic:'https://www.adobe.com/express/create/media_141efea30cca217e8cb7fb3abb8ed9d663c29d550.jpeg?width=2000&format=webply&optimize=medium',
      name:'Ayten Yılmaz',
      company: 'Coca Cola',
      quote:'“Her kadının içinde bir girişimci ruhu olduğuna inanıyorum. İhtiyacımız olan; onu cesaretlendirmek, harekete geçirmek ve ikna etmektedir...”'
    },
    {
      profile_pic:'https://www.adobe.com/express/create/media_141efea30cca217e8cb7fb3abb8ed9d663c29d550.jpeg?width=2000&format=webply&optimize=medium',
      name:'Ayten Yılmaz',
      company: 'Coca Cola',
      quote:'“Her kadının içinde bir girişimci ruhu olduğuna inanıyorum. İhtiyacımız olan; onu cesaretlendirmek, harekete geçirmek ve ikna etmektedir...”'
    },
    {
      profile_pic:'https://www.adobe.com/express/create/media_141efea30cca217e8cb7fb3abb8ed9d663c29d550.jpeg?width=2000&format=webply&optimize=medium',
      name:'Ayten Yılmaz',
      company: 'Coca Cola',
      quote:'“Her kadının içinde bir girişimci ruhu olduğuna inanıyorum. İhtiyacımız olan; onu cesaretlendirmek, harekete geçirmek ve ikna etmektedir...”'
    },
  ]
  return (
    <section id="testimonials" className="text-center w-full mt-24">
      <p className="text-3xl font-bold">Paydaşlarımızın Görüşleri</p>
      <div className="flex overflow-x-auto">
        {
          testimonials.map(t => (
            <TestimonialCard testimonial={t}/>
          ))
        }
      </div>
      <div className="flex justify-between items-center">
        <img src="three-dot.svg" />
      </div>
    </section>
  );
}

export default Testimonials;
