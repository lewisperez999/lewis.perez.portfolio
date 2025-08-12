import Link from 'next/link'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/admin" className="flex items-center px-4 text-lg font-medium text-gray-900 dark:text-white">
                Portfolio Admin
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link 
                  href="/admin/skills" 
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-300"
                >
                  Skills
                </Link>
                <Link 
                  href="/admin/projects" 
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-300"
                >
                  Projects
                </Link>
                <Link 
                  href="/admin/experience" 
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-300"
                >
                  Experience
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link 
                href="/" 
                className="text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-300"
              >
                Back to Site
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="py-6">
        {children}
      </main>
    </div>
  )
}
