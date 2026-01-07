const vectors = [
  {
    id: "01",
    label: "SECRETS",
    desc: "Hardcoded credentials, keys, and tokens.",
    color: "group-hover:text-otonmi-red",
  },
  {
    id: "02",
    label: "DEPS",
    desc: "Vulnerable packages & third-party libraries.",
    color: "group-hover:text-otonmi-blue",
  },
  {
    id: "03",
    label: "CONFIG",
    desc: "Misconfigured settings & branch protection.",
    color: "group-hover:text-yellow-500",
  },
  {
    id: "04",
    label: "AUTH",
    desc: "Weak access controls & permission sprawls.",
    color: "group-hover:text-purple-500",
  },
];

export default function VectorGrid() {
  return (
    <section className="bg-otonmi-black py-24 border-t border-otonmi-border relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ATTACK VECTORS
          </h2>
          <p className="text-otonmi-gray max-w-xl">
            Our Autonomous Engine continuously scans these critical areas to
            ensure complete coverage of your repository's surface area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-otonmi-border border border-otonmi-border">
          {vectors.map((vec) => (
            <div
              key={vec.id}
              className="bg-otonmi-black p-8 group hover:bg-otonmi-frame transition-colors cursor-default relative overflow-hidden"
            >
              <span className="text-xs font-mono text-otonmi-gray/50 mb-6 block">
                VECTOR // {vec.id}
              </span>
              <h3
                className={`text-xl font-bold mb-3 transition-colors ${vec.color}`}
              >
                {vec.label}
              </h3>
              <p className="text-sm text-otonmi-gray leading-relaxed">
                {vec.desc}
              </p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-otonmi-light transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
