import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';

const getImages = (project) => (
  project.images && project.images.length ? project.images : [project.image]
);

const Cell = ({ data, isOpen, onSelect }) => {
  const images = getImages(data);
  const firstImage = images[0];
  const detailImages = images.slice(1);
  const detailVideos = data.videos || [];
  const detailLinks = data.links || [];
  const detailId = `project-detail-${data.slug}`;

  return (
    <article className={`project-entry${isOpen ? ' is-open' : ''}`}>
      <div className="project-entry__rail" aria-hidden="true">
        <span className="project-entry__marker">PQ</span>
      </div>
      <div className="project-entry__content">
        <button
          aria-controls={detailId}
          aria-expanded={isOpen}
          className="project-preview"
          onClick={() => onSelect(data.slug)}
          type="button"
        >
          <span className="project-preview__head">
            <span>
              <span className="project-preview__title">{data.title}</span>
              <span className="project-preview__subtitle">{data.subtitle}</span>
            </span>
            <time className="project-preview__date" dateTime={data.date}>
              {dayjs(data.date).format('MMM YYYY')}
            </time>
          </span>
          <span className="project-preview__image">
            <img src={`${process.env.PUBLIC_URL}${firstImage}`} alt={data.title} />
          </span>
          <span className="project-preview__body">
            <span className="project-preview__summary">{data.summary || data.desc}</span>
            <span className="project-preview__tags">
              {data.tags.map((tag) => (
                <span className="project-preview__tag" key={tag}>{tag}</span>
              ))}
            </span>
            <span className="project-preview__action">
              <span>{isOpen ? 'Hide detail' : 'View detail'}</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </span>
        </button>

        {isOpen && (
          <div className="project-detail" id={detailId}>
            <div className="project-detail__grid">
              <div className="project-detail__copy">
                <h3>{data.title}</h3>
                {data.details.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {detailLinks.length > 0 && (
                  <div className="project-detail__links">
                    {detailLinks.map((link) => (
                      <a
                        href={link.href}
                        key={link.href}
                        rel={link.external ? 'noreferrer' : undefined}
                        target={link.external ? '_blank' : undefined}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <dl className="project-detail__facts">
                {data.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>
                      {fact.href ? (
                        <a href={fact.href}>{fact.value}</a>
                      ) : fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            {detailImages.length > 0 && (
              <div className="project-detail__gallery">
                {detailImages.map((image) => (
                  <img
                    alt={data.title}
                    key={image}
                    src={`${process.env.PUBLIC_URL}${image}`}
                  />
                ))}
              </div>
            )}
            {detailVideos.length > 0 && (
              <div className="project-detail__videos">
                {detailVideos.map((video) => (
                  <figure key={video.src}>
                    <video controls playsInline preload="metadata">
                      <source
                        src={`${process.env.PUBLIC_URL}${video.src}`}
                        type={video.type}
                      />
                      <track
                        default
                        kind="captions"
                        label="English"
                        src={`${process.env.PUBLIC_URL}${video.captions}`}
                        srcLang="en"
                      />
                      <a href={`${process.env.PUBLIC_URL}${video.src}`}>Open video</a>
                    </video>
                    <figcaption>{video.title}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

Cell.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
    facts: PropTypes.arrayOf(PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
    image: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
      external: PropTypes.bool,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })),
    slug: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    videos: PropTypes.arrayOf(PropTypes.shape({
      captions: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })),
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Cell;
