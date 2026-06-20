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

const DocumentHead = ({
  title,
  titleTemplate,
  defaultTitle,
  description,
}) => {
  useEffect(() => {
    document.title = formatTitle(title, titleTemplate, defaultTitle);
    ensureDescriptionMeta().setAttribute('content', description);
  }, [defaultTitle, description, title, titleTemplate]);

  return null;
};

DocumentHead.propTypes = {
  title: PropTypes.string,
  titleTemplate: PropTypes.string,
  defaultTitle: PropTypes.string,
  description: PropTypes.string,
};

DocumentHead.defaultProps = {
  title: null,
  titleTemplate: '%s | Peiyuan Qi',
  defaultTitle: "Peiyuan's Personal Website.",
  description: "Peiyuan's Personal Website.",
};

export default DocumentHead;
