import { Helmet } from "react-helmet-async";

import HEAD from '../../components/common/HEAD'
import SERV from '../../components/common/serv'
import CTA1 from '../../components/common/CTA1'
import NeonC from '../../components/common/NeonC'
import WITHCLASSIC from '../../components/common/WITHCLASSIC'
import CollectC from "../../components/common/CollectC";
import BlackCollage from "../../components/common/BlackCollage";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Custom Enamel Signage Services | Porcelain Signs</title>
        <meta
          name="description"
          content="Explore custom porcelain sign services including round signs, die-cut signage, neon displays, and vintage enamel designs built for durability and impact."
        />
      </Helmet>

      <HEAD />

      <SERV />
      <CollectC />
      <BlackCollage />

      <CTA1 />

      <WITHCLASSIC />
      <NeonC />
    </>
  )
}

export default Services;