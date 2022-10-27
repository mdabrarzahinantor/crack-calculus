import Link from "next/link";

const Links = () => {
  return (
    <div className="links">
      <div className="links-container">
        <Link href="/downloads" className="links-link">
          Downloads
        </Link>
        <Link href="/about" className="links-link">
          About
        </Link>

        <Link href="/donate" className="links-link">
          Donate
        </Link>
      </div>
    </div>
  );
};

export default Links;
