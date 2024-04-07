import Image from "next/image";
import "./top.css";

export default function Top() {
    return (
      
      <div className="top">
        <h1 className="logoName">
          Effi
        </h1>
        <Image
              src="/image.png"
              alt="Effiquest Logo"
              className="Logo"
              width={100}
              height={24}
              priority
            />
        <h1 className="logoName">Quest</h1>
      </div>
      
    );
  }
  