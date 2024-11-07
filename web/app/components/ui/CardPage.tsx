import {
  Figure,
  LocaleString,
  LocaleText,
  PageModulaire,
  Studio,
} from "@/app/types/schema";
import React, { MouseEvent, useEffect } from "react";
import FigureUI from "./Figure";
import {
  _linkResolver,
  _localizeField,
  _localizeText,
} from "@/app/utils/utils";
import AOS from "./AOS";
import { subscribe } from "pubsub-js";
import Link from "next/link";

type Props = {
  input: PageModulaire;
  _onClick?: Function;
};

const CardPage = ({ input, _onClick }: Props) => {
  const { imageCover, title, subTitle, excerpt } = input;

  console.log(input);

  return (
    <article className="card card--page">
      <Link href={_linkResolver(input)}>
        <AOS>
          <div className="inner">
            <div className="image">
              {imageCover && <FigureUI asset={imageCover.image} />}
            </div>
            <div className="header flex justify-between items-center">
              {title && <h3>{_localizeField(title)}</h3>}
              {subTitle && (
                <span className="cartouche cartouche--sm">
                  {_localizeField(subTitle)}
                </span>
              )}
            </div>
            {excerpt && <p className="excerpt">{_localizeField(excerpt)}</p>}
          </div>
        </AOS>
      </Link>
    </article>
  );
};

export default CardPage;
