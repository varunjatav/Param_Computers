import React from "react";

const Paypal = () => {
  return (
    <div className="flex py-2 justify-center">
      <button className="border w-full bg-yellow-300">
        <img
          src="https://cdn.freelogovectors.net/wp-content/uploads/2023/08/paypallogo-freelogovectors.net_-180x133.png"
          alt="paypal"
          width={"100px"}
          height={"10px"}
          loading="lazy"
          className="m-auto"
        />
      </button>
    </div>
  );
};

export default Paypal;
