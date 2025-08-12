import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Portfolio Admin Dashboard
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/admin/skills" className="group">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600">
              Manage Skills
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Add, edit, and organize your technical skills by category.
            </p>
          </div>
        </Link>
        
        <Link href="/admin/projects" className="group">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600">
              Manage Projects
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Update project details, screenshots, and descriptions.
            </p>
          </div>
        </Link>
        
        <Link href="/admin/experience" className="group">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600">
              Manage Experience
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Add and update your work experience and achievements.
            </p>
          </div>
        </Link>
      </div>

      <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-4">
          Getting Started
        </h2>
        <div className="space-y-2 text-blue-700 dark:text-blue-300">
          <p>• Configure your MongoDB connection in <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">.env.local</code></p>
          <p>• Run <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">pnpm prisma db push</code> to sync your database</p>
          <p>• Run <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">node prisma/seed.js</code> to populate with initial data</p>
          <p>• Start managing your portfolio content dynamically!</p>
        </div>
      </div>
    </div>
  )
}
