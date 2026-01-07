export default function ({
  name,
  description,
  role,
}: {
  name: string;
  description: string;
  role: string;
}) {
  return (
    <div className="text-right">
      <span className="block text-[10px] font-mono text-otonmi-gray mb-1">
        {name.toUpperCase()}
      </span>
      <h3 className="text-2xl font-bold text-otonmi-light">
        {role.toUpperCase()}
      </h3>
      <span className="text-[10px] font-mono text-otonmi-gray/50">
        {description.toUpperCase()}
      </span>
    </div>
  );
}
