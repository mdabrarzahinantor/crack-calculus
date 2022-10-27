import Link from "next/link";
import "katex/dist/katex.min.css";

export default function Home() {
  return (
    <div className="main">
      <div className="main-container">
        <div className="tag">About Us</div>
        <h1>Our Mission</h1>
        <div className="paragraph">
          Our mission is to provide free, comprehensive teachings on calculus to
          you. This project is non-profit. To support our project you can help
          us by{" "}
          <Link href={"https://www.buymeacoffee.com/crackcalculus"}>
            donating
          </Link>{" "}
          today!
        </div>
        <div className="paragraph">
          We tried to make the interface as simple as possible. Cuz to learn and
          read simplicity is effecient and hence inevitable.
        </div>
        <div className="paragraph">
          If you have any query you can email us via{" "}
          <b>crackcalculus@gmail.com</b>. Get in touch with us by joining our{" "}
          <Link href="https://t.me/crackcalculus">
            <b>telegram</b>
          </Link>{" "}
          channel. This is where we try to provide thoughts frequently.
        </div>
      </div>
    </div>
  );
}
