import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const GitHubSection = () => {
  return (
    <section id="github-section" className="bg-base-100 overflow-hidden pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary/80 to-primary/50">
            Open Source
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            CleanType is proudly open source. Join our community, contribute, and help make it even better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card bg-base-200/50 shadow-soft hover:shadow-hover transition-all duration-300 border border-base-300/10">
            <div className="card-body">
              <div className="flex items-center gap-2 mb-2">
                <FaGithub className="text-2xl" />
                <h3 className="card-title text-2xl">Star on GitHub</h3>
              </div>
              <p className="text-base-content/80 mb-6">
                Show your support by starring the project on GitHub. It helps us reach more developers.
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://github.com/StarKnightt/CleanType"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary shadow-soft hover:shadow-hover gap-2"
                >
                  Visit Repository <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-base-200/50 shadow-soft hover:shadow-hover transition-all duration-300 border border-base-300/10">
            <div className="card-body">
              <div className="flex items-center gap-2 mb-2">
                <FaGithub className="text-2xl" />
                <h3 className="card-title text-2xl">Contribute</h3>
              </div>
              <p className="text-base-content/80 mb-6">
                Found a bug? Have a feature request? Feel free to create an issue or submit a pull request.
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://github.com/StarKnightt/CleanType/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline hover:bg-base-content/10 shadow-soft hover:shadow-hover border-base-content/20 gap-2"
                >
                  View Issues <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;