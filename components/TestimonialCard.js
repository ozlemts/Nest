function TestimonialCard(props) {
  return (
    <div className="testimonial-card border-2 border-gray-200 dark:border-blue-400 bg-white dark:bg-blue-600 rounded-lg p-6 w-4/12 m-6 text-left">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <img
            src={props.testimonial.profile_pic}
            className="w-16 h-16 rounded-full"
          />
          <div className="ml-4">
            <p className="font-bold">{props.testimonial.name}</p>
            <p>{props.testimonial.company}</p>
          </div>
        </div>
        <img src="/star.svg" />
      </div>
      <p className="mt-4">{props.testimonial.quote}</p>
    </div>
  );
}

export default TestimonialCard;
