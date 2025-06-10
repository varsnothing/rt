import { SubNav, Button } from "@/components";

const PlayIcon = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z"
        stroke="#746A64"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10L18 14L12 18V10Z"
        stroke="#746A64"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export function Detail({ data = {} }) {
  return (
    <>
      <main className="rt-detail">
        <SubNav title={data?.title} />
        <div className="rt-detail__content">
          <section className="rt-detail__atf">
            <img className="rt-detail__poster" src={data?.poster} />
            <div className="rt-detail__header">
              <h2 className="rt-detail__title">{data?.releaseDate}</h2>
              <h3 className="rt-detail__subtitle rt-italic">
                {data?.duration} mins
              </h3>
              <p className="rt-bold rt-detail__rating">{data?.userRating}/10</p>
              <Button>Add to favorite</Button>
            </div>
          </section>
          <article className="rt-detail__synopsis">{data?.synopsis}</article>
          {data?.trailers.length > 0 ? (
            <div className="rt-detail__trailers">
              <p className="rt-detail__trailers-header">TRAILERS</p>
              <hr className="rt-detail__trailers-divider" />
              {data?.trailers.map((trailer, index) => {
                return (
                  <a
                    key={`rt-trailer--${trailer}`}
                    href={trailer}
                    target="_blank"
                    className="rt-detail__trailers-item"
                  >
                    <PlayIcon />
                    <p className="rt-detail__trailers-item__content">
                      Play trailer {index + 1}
                    </p>
                  </a>
                );
              })}
            </div>
          ) : undefined}
        </div>
      </main>
    </>
  );
}
