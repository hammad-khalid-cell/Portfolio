import { certifications } from "../constants/certifications";

const Certifications = () => {
  return (
    <section className="c-space section-spacing" id="certifications">
      <h2 className="text-heading">Certifications</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="p-6 border border-white/10 rounded-2xl bg-gradient-to-br from-primary/50 to-primary hover:border-lavender/50 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-neutral-300 text-sm mb-1">{cert.issuer}</p>
                <p className="text-neutral-400 text-xs">
                  {cert.platform} • {cert.date}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-xs text-neutral-400 mb-2">Key Skills:</p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-lavender/10 text-lavender border border-lavender/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={cert.verification}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-lavender hover:text-royal transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Verify Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
