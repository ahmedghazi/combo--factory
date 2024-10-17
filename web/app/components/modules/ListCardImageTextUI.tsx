import { ListCardImageTextUI } from "@/app/types/schema";
import { _localizeField } from "@/app/utils/utils";
import React from "react";
import Card from "../ui/Card";
import AOS from "../ui/AOS";
import clsx from "clsx";

type Props = {
  input: ListCardImageTextUI;
};

const ModuleListCardImageTextUI = ({ input }: Props) => {
  return (
    <section className="module module--list-card-image-text-ui">
      <div className="inner">
        <h2 className="headline">{_localizeField(input.title)}</h2>
        <div
          className={clsx(
            "grid gap-xl md:gap-md",
            `md:grid-cols-${input.gridSize || 3}`
          )}
        >
          {input.items?.map((item, i) => (
            <div key={i}>
              <AOS delay={i / 5}>
                <Card
                  key={i}
                  image={item.image}
                  title={_localizeField(item.title)}
                  text={_localizeField(item.text)}
                />
              </AOS>
            </div>
          ))}
        </div>
      </div>
      {/* <pre>{JSON.stringify(input.items, null, 2)}</pre> */}
    </section>
  );
};

export default ModuleListCardImageTextUI;
