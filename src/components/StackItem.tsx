import type { Technology } from "../types/technology";

interface StackItemProps {
  technology: Technology;
  onRemove: (id: string) => void;
}

const StackItem = ({
  technology,
  onRemove,
}: StackItemProps) => {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3">

      <img
        src={technology.icon}
        alt={`${technology.name} icon`}
        className="h-8 w-8 object-contain"
      />

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm font-semibold text-slate-800">
          {technology.name}
        </h4>

        <p className="text-xs text-slate-400">
          {technology.category}
        </p>
      </div>

      <button
        onClick={() => onRemove(technology.id)}
        className="text-lg text-slate-400 transition hover:text-red-500"
        aria-label={`Remove ${technology.name}`}
      >
        ×
      </button>
    </div>
  );
};

export default StackItem;