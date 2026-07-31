import { useEffect } from 'react';
import PropTypes from 'prop-types';

const formatTitle = (title, titleTemplate, defaultTitle) => {
  if (!title) {
    return defaultTitle;
  }

  return titleTemplate ? titleTemplate.replace('%s', title) : title;
};

const ensureDescriptionMeta = () => {
  let meta = document.querySelector('meta[name="description"]');

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    document.head.appendChild(meta);
  }

  return meta;
};

const ensureMeta = (attribute, key) => {
  let meta = document.querySelector(`meta[${attribute}="${key}"]`);

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  return meta;
};

const ensureCanonicalLink = () => {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  return link;
};

const absoluteUrl = (value) => new URL(value, 'https://peiyuanqi.me').toString();

const DocumentHead = ({
  title,
  titleTemplate,
  defaultTitle,
  description,
  canonicalPath,
  image,
  type,
}) => {
  useEffect(() => {
    const formattedTitle = formatTitle(title, titleTemplate, defaultTitle);
    const canonicalUrl = absoluteUrl(canonicalPath || window.location.pathname);
    const imageUrl = absoluteUrl(image);

    document.title = formattedTitle;
    ensureDescriptionMeta().setAttribute('content', description);
    ensureCanonicalLink().setAttribute('href', canonicalUrl);
    ensureMeta('property', 'og:title').setAttribute('content', formattedTitle);
    ensureMeta('property', 'og:description').setAttribute('content', description);
    ensureMeta('property', 'og:type').setAttribute('content', type);
    ensureMeta('property', 'og:url').setAttribute('content', canonicalUrl);
    ensureMeta('property', 'og:image').setAttribute('content', imageUrl);
    ensureMeta('property', 'og:site_name').setAttribute('content', 'Peiyuan Qi');
    ensureMeta('name', 'twitter:card').setAttribute('content', 'summary_large_image');
    ensureMeta('name', 'twitter:title').setAttribute('content', formattedTitle);
    ensureMeta('name', 'twitter:description').setAttribute('content', description);
    ensureMeta('name', 'twitter:image').setAttribute('content', imageUrl);
  }, [canonicalPath, defaultTitle, description, image, title, titleTemplate, type]);

  return null;
};

DocumentHead.propTypes = {
  title: PropTypes.string,
  titleTemplate: PropTypes.string,
  defaultTitle: PropTypes.string,
  description: PropTypes.string,
  canonicalPath: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
};

DocumentHead.defaultProps = {
  title: null,
  titleTemplate: '%s | Peiyuan Qi',
  defaultTitle: "Peiyuan's Personal Website.",
  description: "Peiyuan's Personal Website.",
  canonicalPath: null,
  image: '/images/me.jpg',
  type: 'website',
};

export default DocumentHead;
