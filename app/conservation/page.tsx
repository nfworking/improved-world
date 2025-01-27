import Layout from "../components/layout"
import { CheckCircle } from "lucide-react"

export default function Conservation() {
  const reasons = [
    "Biodiversity: Coral reefs support an incredible diversity of marine life.",
    "Coastal Protection: They act as natural barriers, protecting coastlines from storms and erosion.",
    "Economic Value: Coral reefs contribute billions to the global economy through tourism and fisheries.",
    "Medical Research: Many coral reef organisms are being used in medical research to develop new drugs.",
    "Climate Regulation: Coral reefs play a role in carbon and nitrogen fixing, helping to regulate Earth's climate.",
    "Cultural Significance: For many coastal communities, coral reefs have important cultural and spiritual value.",
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Why We Should Protect Coral Reefs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">How You Can Help</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Reduce your carbon footprint</li>
              <li>Use reef-safe sunscreen</li>
              <li>Avoid purchasing coral souvenirs</li>
              <li>Practice responsible diving and snorkeling</li>
              <li>Support organizations working to protect coral reefs</li>
              <li>Educate others about the importance of coral reefs</li>
            </ul>
            <div>
              <h3 className="text-xl font-bold mb-2">Take Action Now</h3>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Donate to Coral Reef Conservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

