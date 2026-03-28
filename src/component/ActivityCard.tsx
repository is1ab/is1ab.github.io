import { useState } from "react"

type ActivityCardProps = {
  imgSrc: string
  title: string
  description: string
  subTitle: string
  link?: string
}

export const ActivityCard = ({
  imgSrc,
  title,
  description,
  subTitle,
  link,
}: ActivityCardProps) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="rounded overflow-hidden border"
      style={{
        backgroundColor: "#424242",
        borderColor: "#7a1b1b",
      }}
    >
      <div className="row g-0">
        <div className="col-12 col-lg-5">
          <div className="p-3 p-md-4 h-100 d-flex align-items-center">
            <img
              src={imgSrc}
              alt={title}
              className="img-fluid rounded w-100"
              style={{
                aspectRatio: "16 / 9",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <div className="col-12 col-lg-7">
          <div className="p-3 p-md-4 h-100 d-flex flex-column justify-content-center">
            <div className="mb-3">
              <h5 className="fw-bold mb-2" style={{ color: "#d32f2f" }}>
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                    style={{ color: "#d32f2f" }}
                  >
                    {title}
                  </a>
                ) : (
                  title
                )}
              </h5>

              {subTitle && <div className="text-white fs-5">{subTitle}</div>}
            </div>

            <p
              className="text-white mb-2"
              style={
                expanded
                  ? {
                      lineHeight: 1.8,
                      wordBreak: "break-word",
                    }
                  : {
                      lineHeight: 1.8,
                      wordBreak: "break-word",
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }
              }
            >
              {description}
            </p>

            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="btn btn-sm align-self-start px-0"
              style={{
                color: "#ffb3b3",
                border: "none",
                background: "transparent",
              }}
            >
              {expanded ? "收起全文" : "查看全文..."}
            </button>

            {link && (
              <div className="mt-3">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "#7a1b1b",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  查看課程
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
