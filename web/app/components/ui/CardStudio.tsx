import { Figure, LocaleString, LocaleText, Studio } from "@/app/types/schema";
import React, { MouseEvent } from "react";
import FigureUI from "./Figure";
import { _localizeField, _localizeText } from "@/app/utils/utils";
import AOS from "./AOS";

type Props = {
  input: Studio;
  _onClick?: Function;
};

const CardStudio = ({ input, _onClick }: Props) => {
  const { imageCover, title, excerpt, location } = input;
  const onClick = (event: MouseEvent<HTMLElement>) => {
    /**
     * RESET all others
     */
    const target = event.target as Element;
    if (!target?.classList.contains("is-active")) {
      const articles: NodeListOf<HTMLElement> = document.querySelectorAll(
        ".grid article.is-active"
      );
      articles.forEach((el) => {
        el.classList.remove("is-active");
        el.style.paddingBottom = "0";
      });
    }

    if (typeof _onClick === "function") _onClick(event, input);
  };

  return (
    <article className="card card--studio" onClick={onClick}>
      <div className="pointer-events-none ">
        <AOS>
          <div className="inner">
            <div className="image">
              {imageCover && <FigureUI asset={imageCover.image} />}
              <div className="overlay">
                <div className="bg-blend"></div>
                <button className="btn--pill">
                  {_localizeText("reserver")}
                </button>
              </div>
            </div>
            <div className="header flex justify-between items-baseline">
              {title && <h3>{_localizeField(title)}</h3>}
              {location && <span>{location}</span>}
            </div>
            {excerpt && <p className="excerpt">{_localizeField(excerpt)}</p>}
          </div>
        </AOS>
      </div>
    </article>
  );
};

export default CardStudio;
