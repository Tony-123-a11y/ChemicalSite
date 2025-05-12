import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const SocialSideBar = () => {
  return (
    <div className="fixed top-1/3 left-0 z-50">
      <ul className="space-y-2">
        {[
          {
            icon: <FaGithub />,
            url: 'https://github.com/',
            label: 'GitHub',
          },
          {
            icon: <FaLinkedin />,
            url: 'https://linkedin.com/',
            label: 'LinkedIn',
          },
          {
            icon: <FaTwitter />,
            url: 'https://twitter.com/',
            label: 'Twitter',
          },
          {
            icon: <FaEnvelope />,
            url: 'mailto:example@example.com',
            label: 'Email',
          },
        ].map(({ icon, url, label }) => (
          <li key={label}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors rounded-r-full shadow-md"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialSideBar;
