import React from "react";
import first from "../../public/My.jpg";

function Home() {
  return (
    <div className="-mt-1 w-full overflow-hidden">
      <img
        src={first}
        alt="Dibyanshu's University"
        className="w-full h-auto block object-cover"
      />
    </div>
  );
}

export default Home;