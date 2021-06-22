function CircleMenu() {
  return (
    <div className="rotated-half-circle bg-blue-500 mx-auto my-6">
      <div className="circle-elements relative">
        <div className="item-1 absolute">
          <div className="reverse-1">
            <img
              src="sun.svg"
              height="70"
              width="70"
              className="p-6 bg-white rounded-full shadow"
            />
          </div>
        </div>
        <div className="item-2 absolute">
          <img
            src="sun.svg"
            className="rounded-full p-6 bg-white colorful-border"
          />
        </div>
        <div className="item-3 absolute">
          <img
            src="sun.svg"
            height="70"
            width="70"
            className="p-6 bg-white rounded-full shadow"
          />
        </div>
        <div className="item-4 absolute">
          <img
            src="sun.svg"
            height="70"
            width="70"
            className="p-6 bg-white rounded-full shadow"
          />
        </div>
        <div className="item-5 absolute">
          <img
            src="sun.svg"
            height="70"
            width="70"
            className="p-6 bg-white rounded-full shadow"
          />
        </div>
        <div className="item-6 absolute">
          <img
            src="sun.svg"
            height="70"
            width="70"
            className="p-6 bg-white rounded-full shadow"
          />
        </div>
      </div>
    </div>
  );
}

export default CircleMenu;
