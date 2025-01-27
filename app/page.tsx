import Layout from "./components/layout"
import Link from "next/link"

export default function Home() {
  return (
    <Layout>
      <div className="relative min-h-screen">
        <video autoPlay loop muted className="absolute z-0 w-full h-full object-cover">
          <source src="/coral-reef-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4 bg-black bg-opacity-50">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Discover the Wonder of Coral Reefs</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Explore the beauty beneath the waves and learn why conservation matters.
          </p>
          <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8">
            Learn More
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            <InfoCard
              title="Biodiversity Hotspots"
              description="Coral reefs support an incredible 25% of all marine species while covering less than 1% of the ocean floor."
            />
            <InfoCard
              title="Economic Value"
              description="Coral reefs provide billions of dollars in economic and environmental services, such as food, coastal protection, and tourism."
            />
            <InfoCard
              title="Climate Change Threat"
              description="Rising sea temperatures and ocean acidification pose significant threats to coral reefs worldwide."
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-blue-800 bg-opacity-75 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  )
}

