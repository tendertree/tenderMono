import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { HomeIcon, ChevronRight } from 'lucide-react';

const PathIndex = () => {
  const pathname = usePathname();
  
  const pathSegments = pathname
    .split('/')
    .filter(segment => segment !== '')
    .map(segment => ({
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      path: segment,
    }));

  return (
    <div className="mb-8">
      <nav className="flex mb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link 
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <HomeIcon className="w-4 h-4 me-2.5" />
              Home
            </Link>
          </li>
          
          {pathSegments.map((segment, index) => {
            const path = '/' + pathSegments
              .slice(0, index + 1)
              .map(seg => seg.path)
              .join('/');
              
            return (
              <li key={segment.path}>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-1 rtl:rotate-180" />
                  {index === pathSegments.length - 1 ? (
                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                      {segment.name}
                    </span>
                  ) : (
                    <Link
                      href={path}
                      className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      {segment.name}
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
      
      <h2 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
        {pathSegments.length > 0 
          ? pathSegments[pathSegments.length - 1].name 
          : 'Home'}
      </h2>
    </div>
  );
};

export default PathIndex;
