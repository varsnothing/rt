const PAGE_BASEPATH = "/movies/";
const MAX_PAGES = 500;

export function Pagination({ page }) {
  return (
    <div className="rt-pag__wrapper">
      {page > 1 ? (
        <div className="rt-pag__item">
          <a href={`${PAGE_BASEPATH}${page - 1}`}>Previous</a>
        </div>
      ) : undefined}
      {page === MAX_PAGES ? (
        <>
          <div className="rt-pag__item">
            <a href={`${PAGE_BASEPATH}1`}>1</a>
          </div>
          <div className="rt-pag__item">
            <div className="rt-ellipsis" />
          </div>
        </>
      ) : undefined}
      {page > 1 ? (
        <div className="rt-pag__item">
          <a href={`${PAGE_BASEPATH}/${page - 1}`}>{page - 1}</a>
        </div>
      ) : undefined}
      <div className="rt-pag__item">
        <a className="rt-pag__active" href={`${PAGE_BASEPATH}/${page}`}>
          {page}
        </a>
      </div>
      {page < MAX_PAGES ? (
        <div className="rt-pag__item">
          <a href={`${PAGE_BASEPATH}/${page + 1}`}>{page + 1}</a>
        </div>
      ) : undefined}
      {page < MAX_PAGES ? (
        <>
          <div className="rt-pag__item">
            <div className="rt-ellipsis" />
          </div>
          <div className="rt-pag__item">
            <a href={`${PAGE_BASEPATH}${MAX_PAGES}`}>{MAX_PAGES}</a>
          </div>
          <div className="rt-pag__item">
            <a href={`${PAGE_BASEPATH}${page + 1}`}>Next</a>
          </div>
        </>
      ) : undefined}
    </div>
  );
}
