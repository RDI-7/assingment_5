import StackItem from "./StackItem";
import type { Technology } from "../types/technology";

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({
  stack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) => {
  return (
    <aside className="h-fit rounded-xl border border-slate-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">

      <div>
        <h2 className="text-lg font-bold text-slate-900">
          Your Stack
        </h2>

        <p className="mt-1 text-xs text-slate-400">
          {stack.length}{" "}
          {stack.length === 1
            ? "Technology"
            : "Technologies"}{" "}
          Selected
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="flex min-h-32 items-center justify-center py-8 text-center">
          <p className="text-sm leading-6 text-slate-400">
            Your stack is empty.
            <br />
            Add technologies to build your stack.
          </p>
        </div>
      ) : (
        <div className="mt-5 space-y-2">
          {stack.map((technology) => (
            <StackItem
              key={technology.id}
              technology={technology}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-5 w-full rounded-md border border-red-200 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
};

export default StackSidebar;