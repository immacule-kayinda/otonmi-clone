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
    <div className="text-left p-12 h-full group hover:bg-neutral-900 transition-colors duration-300 relative">
      <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-red-500 scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-400 ease-in-out" />
      <span className="block text-[10px] font-mono group-hover:text-red-500 transition-colors duration-300 text-otonmi-gray/50">
        {name.toUpperCase()}
      </span>
      <div className="h-full flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-otonmi-light group-hover:translate-x-2 transition-transform duration-300">
          {role.toUpperCase()}
        </h3>
        <span className="text-[10px] font-mono text-otonmi-gray/50">
          {description.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
