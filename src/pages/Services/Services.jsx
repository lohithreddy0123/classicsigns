import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import HEAD from '../../components/common/HEAD'
import SERV from '../../components/common/serv'
import CTA1 from '../../components/common/CTA1'
import NeonC from '../../components/common/NeonC'
import CollectC from "../../components/common/CollectC";
import BlackCollage from "../../components/common/BlackCollage";

const WITHCLASSIC = lazy(() => import('../../components/common/WITHCLASSIC'))

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Custom Enamel Signage Services | Porcelain Signs</title>
        <meta
          name="description"
          content="Explore custom porcelain sign services including round signs, die-cut signage, neon displays, and vintage enamel designs built for durability and impact."
        />
        <link rel="canonical" href="https://www.classicporcelainsigns.com/services" />
        <meta property="og:url" content="https://www.classicporcelainsigns.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Custom Enamel Signage Services | Porcelain Signs" />
        <meta property="og:description" content="Explore custom porcelain sign services including round signs, die-cut signage, neon displays, and vintage enamel designs." />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Flogoh.png?alt=media" />
      </Helmet>
      <HEAD />
      <SERV />
      <CollectC />
      <BlackCollage />
      <CTA1 />
      <Suspense fallback={null}>
        <WITHCLASSIC />
      </Suspense>
      <NeonC />
    </>
  )
}

export default Services;