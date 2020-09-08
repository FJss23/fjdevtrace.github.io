import React from "react";
import pagStyle from "./pagination.module.css";

export default function Pagination({
  projectsPerPage,
  totalProjects,
  paginate,
}) {
  const pageNumbers = [];
  const max = Math.ceil(totalProjects / projectsPerPage);

  for (let index = 1; index <= max; index++) {
    pageNumbers.push(index);
  }

  return (
    <nav>
      <ul className={pagStyle.container}>
        {pageNumbers.map((number) => (
          <li className={pagStyle.list} key={number}>
            <a
              className={pagStyle.link}
              onClick={() => paginate(number)}
              href="#0"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
