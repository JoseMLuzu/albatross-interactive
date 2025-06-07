import { useEffect } from "react";
import { animate, scroll } from "motion";
import "./CategorySection.css";

const CategorySection = ({ title, content }) => {
  useEffect(() => {
    const header = document.querySelector(
      `#${title.toLowerCase().replace(/\s+/g, "-")} h2`
    );
    if (header) {
      scroll(animate(header, { y: [-400, 400] }, { ease: "linear" }), {
        target: header,
      });
    }
  }, [title]);

  return (
    <section
      id={title.toLowerCase().replace(/\s+/g, "-")}
      className="category-section"
    >
      <h2>{title}</h2>
      <div className="content-container">
        <p className="content-text">{content}</p>
      </div>
    </section>
  );
};

export default CategorySection;
