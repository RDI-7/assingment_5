import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) => {
  const {
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
  } = technology;

  return (
    <div className="flex min-h-[310px] flex-col rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      <div className="flex items-start justify-between">
        <img
          src={icon}
          alt={`${name} icon`}
          className="h-8 w-8 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
          {badge}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">
        {name}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        <span className="rounded bg-slate-50 px-2 py-1">
          {category}
        </span>

        <span>{difficulty}</span>

        <span className="font-semibold text-slate-700">
          <span className="text-yellow-500">★</span>{" "}
          {rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-md py-3 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-green-50 text-green-600"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;