import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-3xl font-semibold text-gray-600 mt-4">Page Not Found</h2>
        <p className="text-gray-500 mt-2 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
