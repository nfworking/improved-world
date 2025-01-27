import Layout from "../components/layout"
import Image from "next/image"

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">About Coral Reefs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Coral reefs are diverse underwater ecosystems held together by calcium carbonate structures secreted by
              corals. They are found in tropical and subtropical waters and support tremendous biodiversity.
            </p>
            <p className="mb-4">
              Often called "rainforests of the sea," coral reefs form some of Earth's most diverse ecosystems. They
              occupy less than 0.1% of the world's ocean surface, yet they provide a home for at least 25% of all marine
              species.
            </p>
            <p className="mb-4">
              Beyond their stunning beauty and biodiversity, coral reefs deliver ecosystem services to tourism,
              fisheries and shoreline protection. The total economic value of coral reef services is estimated at tens
              of billions of US dollars per year.
            </p>
            <p>
              However, coral reefs face numerous threats including climate change, ocean acidification, overfishing, and
              pollution. It's crucial that we take action to protect these vital ecosystems for future generations.
            </p>
          </div>
          <div className="relative h-96 md:h-auto">
            <Image
              src="/coral-reef-image.jpg"
              alt="Vibrant coral reef with diverse marine life"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

