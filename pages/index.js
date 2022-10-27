import Mat from "../assets/Mat.jpg";
import Image from "next/image";
import Link from "next/link";
import "katex/dist/katex.min.css";
import Math from "../components/Math";
import Expand from "../assets/expand.svg";
import { useState } from "react";

export default function Home() {
  const [showTopics, setShowTopics] = useState(false);

  return (
    <div className="main">
      <div className="main-container">
        <div className="tag">Differential Calculus</div>
        <h1>‘Monumental’ Math Proof Solves Triple Bubble Problem and More</h1>
        <div className="paragraph subtitle">
          L ut voluptatem tempora ipsum. Illum corrupti vel
          totam! Non laborum quod aliquam sed, nam repudiandae qui eius corporis
          ab.
        </div>
        <div className="keys">
          <div className="keys-container">
            <h2>Key Ideas</h2>
            <ul>
              <li>
                <div className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, perspiciatis. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Voluptatum asperiores at iure
                  mollitia hic, ipsum vel veritatis alias dolorem amet dolorum
                  placeat quas veniam quasi. Libero quidem officia rerum
                  provident?
                </div>
              </li>
              <li>
                <div className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, perspiciatis. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Voluptatum asperiores at iure
                  mollitia hic, ipsum vel veritatis alias dolorem amet dolorum
                  placeat quas veniam quasi. Libero quidem officia rerum
                  provident?
                </div>
              </li>
              <li>
                <div className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, perspiciatis. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Voluptatum asperiores at iure
                  mollitia hic, ipsum vel veritatis alias dolorem amet dolorum
                  placeat quas veniam quasi. Libero quidem officia rerum
                  provident?
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="paragraph">
          When it comes to understanding the shape of bubble clusters,
          mathematicians have been playing catch-up to our physical intuitions
          for millennia. Soap bubble clusters in nature often seem to
          immediately snap into the lowest-energy state, the one that minimizes
          the total surface area of their walls (including the walls between
          bubbles). But checking whether soap bubbles are getting this task
          right — or just predicting what large bubble clusters should look like
          — is one of the hardest problems in geometry. It took mathematicians
          until the late 19th century to prove that the sphere is the best
          single bubble, even though the Greek mathematician Zenodorus had
          asserted this more than 2,000 years earlier. The bubble problem is
          simple enough to state: You start with a list of numbers for the
          volumes, and then ask how to separately enclose those volumes of air
          using the least surface area. But to solve this problem,
          mathematicians must consider a wide range of different possible shapes
          for the bubble walls. And if the assignment is to enclose, say, five
          volumes, we don’t even have the luxury of limiting our attention to
          clusters of five bubbles — perhaps the best way to minimize surface
          area involves splitting one of the volumes across multiple bubbles.
        </div>
        <div className="main-image">
          <Image className="Image" src={Mat} alt="Crack Calculus Logo" />
          <div className="image-credit">Taken from Unsplash</div>
        </div>
        <div className="paragraph">
          Even in the simpler setting of the two-dimensional plane (where you’re
          trying to enclose a collection of areas while minimizing the
          perimeter), no one knows the best way to enclose, say, nine or 10
          areas. As the number of bubbles grows, “quickly, you can’t really even
          get any plausible conjecture,” said Emanuel Milman of the Technion in
          Haifa, <Link href="/israel">Israel</Link> .
        </div>
        <div className="paragraph">
          Even in the simpler setting of the two-dimensional plane (where you’re
          trying to enclose a collection of areas while minimizing the
          perimeter), no one knows the best way to enclose, say, nine or 10
          areas. As the number of bubbles grows, “quickly, you can’t really even
          get any plausible conjecture,” said Emanuel Milman of the Technion in
          Haifa, Israel.
        </div>
        <div className="paragraph">
          Even in the simpler setting of the two-dimensional plane (where you’re
          trying to enclose a collection of areas while minimizing the
          perimeter), no one knows the best way to enclose, say, nine or 10
          areas. As the number of bubbles grows, “quickly, you can’t really even
          get any plausible conjecture,” said Emanuel Milman of the Technion in
          Haifa, Israel.
        </div>
        <div className="paragraph">
          Even in the simpler setting of the two-dimensional plane (where you’re
          trying to enclose a collection of areas while minimizing the
          perimeter), no one knows the best way to enclose, say, nine or 10
          areas. As the number of bubbles grows, “quickly, you can’t really even
          get any plausible conjecture,” said Emanuel Milman of the Technion in
          Haifa, Israel.
        </div>
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, cum.
        </h2>
        <div className="paragraph">
          Even in the simpler setting of the two-dimensional plane (where you’re
          trying to enclose a collection of areas while minimizing the
          perimeter), no one knows the best way to enclose, say, nine or 10
          areas. As the number of bubbles grows, “quickly, you can’t really even
          get any plausible conjecture,” said Emanuel Milman of the Technion in
          Haifa, Israel.
        </div>
        <div className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt at
          tempore sint laborum reiciendis maxime voluptatum inventore. Quaerat
          doloribus tenetur fuga nemo itaque earum minus et odio saepe
          architecto reprehenderit, temporibus mollitia deserunt veritatis
          voluptate. Aut corporis, rem magnam ad in, totam impedit quasi magni
          nisi quam ab doloribus modi autem labore soluta! Suscipit vero aut
          aliquam asperiores quasi reprehenderit a deserunt optio nostrum
          veritatis pariatur, placeat cumque, perspiciatis ullam natus eius.
          Voluptatibus, rem sint ducimus soluta nobis id dolor.
        </div>
        <div className="exercise">
          <div className="exercise-container">
            <div
              onClick={() => setShowTopics(!showTopics)}
              className="exercise-title"
            >
              <div className="paragraph exercise-title-left">
                {" "}
                <Math
                  equation={`Example 3.8: \\( \\lim_{x\\to\\infty} f(x) \\)	`}
                />
              </div>
              <div className="exercise-title-right">
                <Image
                  className={showTopics ? "r180" : ""}
                  src={Expand}
                  alt="Expand Icon"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div
              className={`paragraph exercise-answer ${showTopics ? "" : "dn"}`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              cum quae, atque nihil enim sint dolorum culpa tempore, assumenda
              velit veritatis eum laudantium doloribus rem. Porro quis quia
              temporibus atque.lorem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Libero ducimus quo vitae numquam, optio
              reiciendis consequatur qui cupiditate iure impedit quisquam
              dolorum pariatur, laborum dolore temporibus! Eaque doloribus
              voluptas aperiam?Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Pariatur provident tempore totam. Pariatur culpa
              reprehenderit optio eaque et. Tenetur nulla adipisci maiores.
              Dicta veritatis eveniet voluptas, eos aliquid laudantium
              consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deleniti alias hic temporibus magnam sint minus aspernatur
              ipsa aperiam nulla! Odio deleniti mollitia quia maiores, quisquam
              optio ex dolor obcaecati libero!
            </div>
          </div>
        </div>
        <div className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          facilis, cumque officia ab magnam nulla doloribus animi. Provident,
          minus quas aliquid veritatis animi amet quia unde expedita dolor
          repudiandae eius voluptate debitis. Ratione repellendus cum ut nobis
          porro voluptates animi ullam, molestias doloribus qui necessitatibus
          voluptate officia exercitationem praesentium, adipisci veniam, dolore
          reiciendis impedit commodi expedita molestiae accusamus. Quod
          necessitatibus nihil cupiditate id explicabo magnam dicta itaque
          corrupti quia consectetur. Deleniti debitis cum voluptas quaerat omnis
          quasi, rem dignissimos ad quos perspiciatis autem libero odit
          obcaecati totam sit enim laborum. Nostrum necessitatibus, aliquam
          tempora praesentium cum aspernatur neque explicabo iusto.
        </div>
        <div className="previous-next">
          <div className="previous-next-container">
            <Link href="#" className="previous">
              <div>Previous</div>
            </Link>
            <Link href={"#"} className="next">
              <div>Next</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
