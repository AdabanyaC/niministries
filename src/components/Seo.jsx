import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_ORIGIN = "https://www.niministries.org";
const SITE_NAME = "Nelson Iheagwam Ministries";
const SHARE_IMAGE = `${SITE_ORIGIN}/og-image.jpg`;
const SHARE_IMAGE_ALT =
  "Pastor Nelson Iheagwam preaching to a congregation";

const DEFAULT_METADATA = {
  title: `${SITE_NAME} | Saved, Trained and Sent`,
  description:
    "Nelson Iheagwam Ministries helps people come to the saving knowledge of Jesus Christ, grow through sound biblical teaching, and become equipped for ministry.",
};

const ROUTE_METADATA = {
  "/": DEFAULT_METADATA,
  "/about-us": {
    title: `About Us | ${SITE_NAME}`,
    description:
      "Discover the vision and mission of Nelson Iheagwam Ministries: people saved, trained, and sent to do the work of ministry.",
  },
  "/resources": {
    title: `Sermons and Resources | ${SITE_NAME}`,
    description:
      "Watch and explore biblical sermons and ministry resources from Nelson Iheagwam Ministries.",
  },
  "/meet-pni": {
    title: `Meet Pastor Nelson Iheagwam | ${SITE_NAME}`,
    description:
      "Learn about Pastor Nelson Iheagwam, his ministry journey, and his passion for helping people know the truth of God's word.",
  },
  "/contact-us": {
    title: `Contact and Bookings | ${SITE_NAME}`,
    description:
      "Contact Nelson Iheagwam Ministries for prayer, enquiries, or to invite Pastor Nelson Iheagwam to your meeting.",
  },
};

const setMetaContent = (attribute, value, content) => {
  let element = document.head.querySelector(
    `meta[${attribute}="${value}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const toAbsoluteUrl = (url) => {
  if (!url) return SHARE_IMAGE;
  return new URL(url, SITE_ORIGIN).href;
};

export const applyPageMetadata = ({
  title,
  description,
  canonicalPath = "/",
  imageUrl = SHARE_IMAGE,
  imageAlt = SHARE_IMAGE_ALT,
}) => {
  const canonicalUrl = toAbsoluteUrl(canonicalPath);
  const absoluteImageUrl = toAbsoluteUrl(imageUrl);
  const imageType = absoluteImageUrl.toLowerCase().endsWith(".png")
    ? "image/png"
    : "image/jpeg";

  document.title = title;
  setMetaContent("name", "description", description);
  setMetaContent("property", "og:title", title);
  setMetaContent("property", "og:description", description);
  setMetaContent("property", "og:url", canonicalUrl);
  setMetaContent("property", "og:image", absoluteImageUrl);
  setMetaContent("property", "og:image:secure_url", absoluteImageUrl);
  setMetaContent("property", "og:image:type", imageType);
  setMetaContent("property", "og:image:alt", imageAlt);
  setMetaContent("name", "twitter:title", title);
  setMetaContent("name", "twitter:description", description);
  setMetaContent("name", "twitter:image", absoluteImageUrl);
  setMetaContent("name", "twitter:image:alt", imageAlt);

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", canonicalUrl);
};

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath =
      pathname !== "/" ? pathname.replace(/\/$/, "") : pathname;
    const metadata = ROUTE_METADATA[normalizedPath] || DEFAULT_METADATA;
    applyPageMetadata({
      ...metadata,
      canonicalPath: normalizedPath,
    });
  }, [pathname]);

  return null;
};

export default Seo;
