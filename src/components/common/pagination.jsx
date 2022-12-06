import _ from "lodash";
const Pagination = ({ onAPage, currentPage, itemsCount, onPageChange }) => {
  const numberOfPageRequired = Math.ceil(itemsCount / onAPage);
  if (numberOfPageRequired === 1) return;
  const pages = _.range(1, numberOfPageRequired + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
