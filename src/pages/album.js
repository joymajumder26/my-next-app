import React from "react";
import Image from "next/image";
import nextImage from '../assets/images/Nextjs-logo.svg.png'

const Album = () => {
  return (
    <div>
      <h1>This is using img tag</h1>
      <img
        src="https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp"
        alt=""
        width="100%"
      />
      <h1>This image is using image components</h1>
      <Image
        src="https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp"
        width={500}
        height={500}
        layout="responsive"
      />
      <h1>This image is using image local</h1>
      <Image
        src={nextImage}
        width={500}
        height={500}
        layout="responsive"
      />
    </div>
  );
};

export default Album;
