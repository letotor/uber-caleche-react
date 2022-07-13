import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div
      className="min-h-screen hero"
      style={{ backgroundImage: 'url(https://placeimg.com/1000/800/arch)' }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">ERROR 404</h1>
          <p className="mb-5">Page not found</p>
          <Link className="btn btn-primary" to="/">
            Return to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
