import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";

import type { Technology } from "../types/technology";

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<
    Technology[]
  >([]);

  const [stack, setStack] = useState<Technology[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Failed to load technologies"
          );
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
      })
      .catch((error) => {
        console.error(error);

        toast.error(
          "Failed to load technologies"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (
    technology: Technology
  ) => {
    const alreadyExists = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(
        `${technology.name} is already in your stack.`
      );

      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  const handleRemove = (id: string) => {
    const technology = stack.find(
      (item) => item.id === id
    );

    setStack((previousStack) =>
      previousStack.filter(
        (item) => item.id !== id
      )
    );

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack.`
      );
    }
  };

  const handleRemoveAll = () => {
    setStack([]);

    toast.info(
      "All technologies removed from your stack."
    );
  };

  if (loading) {
    return (
      <section
        id="technologies"
        className="mx-auto max-w-6xl px-5 py-20 lg:px-0"
      >
        <div className="flex min-h-80 items-center justify-center">
          <div className="text-center">

            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500"></div>

            <p className="mt-4 text-sm font-medium text-slate-500">
              Loading technologies...
            </p>

          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="technologies"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-24 lg:px-0"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Explore the{" "}
          <span className="gradient-text">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Pick one technology per category to build
          your ideal stack.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_300px]">

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAdd={handleAddToStack}
              isAdded={stack.some(
                (item) =>
                  item.id === technology.id
              )}
            />
          ))}
        </div>

        <StackSidebar
          stack={stack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />

      </div>
    </section>
  );
};

export default TechnologySection;