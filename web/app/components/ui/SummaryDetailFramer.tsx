"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import clsx from "clsx";
import { publish } from "pubsub-js";

type Props = {
  summary: ReactNode;
  detail: ReactNode;
};
const SummaryDetailFramer = ({ summary, detail }: Props) => {
  const [expand, setExpand] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const controls = useAnimation();
  const variants = {
    expanded: { opacity: 1, height: "auto" },
    collapsed: { opacity: 0, height: 0 },
  };

  useEffect(() => {
    if (expand) {
      controls.start("expanded");
      if (ref && ref.current) {
        ref.current.scrollIntoView({
          behavior: "smooth",
        });
      }
      publish("SUMMARY_DETAIL_CHANGE");
    } else {
      controls.start("collapsed");
    }
  }, [expand, controls]);

  // useEffect(() => {
  //   onOpen(expand)
  // }, [expand, onOpen])

  return (
    <div className={clsx("summary-detail", expand && "is-expanded")} ref={ref}>
      <div
        className={clsx("summary ")}
        onClick={() => setExpand(!expand)}
        onKeyUp={() => setExpand(!expand)}
        tabIndex={-1}
        role="button"
      >
        <div className="pointer-events-none ">
          <div
            className={clsx(
              "icon-arrow transition-transform origin-center",
              expand && "rotate-180"
            )}
          >
            <svg
              width="33"
              height="36"
              viewBox="0 0 33 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 17.1L32.8 19.95L16.7 36L0.65 19.95L3.45 17.1L14.95 28.7V0.299998H18.95V28.2L30 17.1Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="title">{summary}</div>
        </div>
      </div>
      <div className="detail">
        <motion.div
          initial="collapsed"
          className="z-0 overflow-hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.3 }}
        >
          {detail}
        </motion.div>
      </div>
    </div>
  );
};

export default SummaryDetailFramer;
