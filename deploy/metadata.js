export const updateMetadata = (title, description, url, image) => {
    if (title) {
        document.title = title;
        metaUpdate('property', 'og:title', document.title);
        metaUpdate('property', 'twitter:title', document.title);
    }
    if (description) {
        metaUpdate('property', 'og:description', description);
        metaUpdate('property', 'twitter:description', description);
    }
    if (image) {
        metaUpdate('property', 'og:image', image);
        metaUpdate('property', 'twitter:image:src', image);
    }
    url = url || document.location.href;
    metaUpdate('property', 'og:url', url);
    metaUpdate('property', 'twitter:url', url);
};
const metaUpdate = (attrName, attrValue, content) => {
    let element = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content || '');
};
//# sourceMappingURL=metadata.js.map