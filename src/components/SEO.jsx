import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Classic Porcelain Signs | Custom Porcelain & Enamel Signage",
  description = "Classic Porcelain Signs crafts custom porcelain enamel signs and handcrafted enamel signage built for durability, timeless appeal, and worldwide delivery.",
  canonical = "https://www.classicporcelainsigns.com/",
  image = "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images-new%2Flogoh.webp?alt=media",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Classic Porcelain Signs" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}