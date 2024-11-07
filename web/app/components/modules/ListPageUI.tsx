import React from "react";
import { ListPageUI } from "@/app/types/schema";
import clsx from "clsx";
import CardPage from "../ui/CardPage";
import { _localizeField } from "@/app/utils/utils";

type Props = {
  input: ListPageUI;
};

const ModuleListPageUI = ({ input }: Props) => {
  const { title, gridSize, items } = input;
  return (
    <section className="module module--list-page-ui">
      <div className="inner">
        <h2 className="headline">{_localizeField(title)}</h2>
        <div
          className={clsx(
            "grid gap-xl md:gap-y-xl md:gap-md",
            `md:grid-cols-${gridSize || 3}`
          )}
        >
          {items?.map((item, i) => (
            <CardPage key={i} input={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModuleListPageUI;
