import Link from "next/link"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-blue-900 text-white p-4">
        <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <Link href="/" className="text-2xl font-bold mb-4 sm:mb-0">
            Coral Reef Conservation
          </Link>
          <ul className="flex flex-wrap justify-center space-x-4">
            <li>
              <Link href="/" className="hover:text-blue-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/model" className="hover:text-blue-300">
                3D Model
              </Link>
            </li>
            <li>
              <Link href="/conservation" className="hover:text-blue-300">
                Conservation
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-blue-900 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          © {new Date().getFullYear()} Coral Reef Conservation. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

