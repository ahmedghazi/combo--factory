// import { gsap, Power4 } from "gsap";

// export function infinitScrollOnePage(
//   wrapper: HTMLDivElement,
//   items: HTMLElement[],
//   direction: string,
//   onScroll: Function,
//   rootMargin: boolean
// ) {
//   var imagesBoundingRect: any = null,
//     deltaTotal: number = 0,
//     wrapY: any,
//     lerpCache: number = 0,
//     rootMarginSize: number = 0,
//     // isScrolling: boolean = false,
//     // isNotScrolling: boolean = true,
//     prevDeltaY: number = 0;

//   if (!wrapper) return;

//   window.addEventListener("resize", _onResize);
//   const debounceWheel = CallLock(_onWheel, 3000);
//   wrapper.addEventListener("wheel", debounceWheel);
//   _onResize();

//   requestAnimationFrame(_update);
//   _animeIntro();

//   function _animeIntro() {
//     if (rootMargin) {
//       const header = document.querySelector("header");
//       if (header) {
//         const bounding = header.getBoundingClientRect();
//         rootMarginSize = bounding.height;
//       }
//     }

//     var obj = { lerpCache: 0 };
//     const nextVal = window.innerHeight * 1 - rootMarginSize;
//     gsap.to(obj, 1, {
//       lerpCache: nextVal,
//       duration: 4,
//       delay: 1,
//       ease: Power4.easeInOut,
//       onUpdate: (o) => {
//         lerpCache = obj.lerpCache;
//       },
//     });
//   }
//   function _onResize() {
//     imagesBoundingRect = items.map(function (article) {
//       return article.getBoundingClientRect();
//     });

//     //set range
//     //start pos => minus first height
//     if (window.innerWidth < 1080) {
//       var first = -imagesBoundingRect[0].width;
//       //end pos => total width
//       var last =
//         imagesBoundingRect.reduce(function (
//           accumulateur: number,
//           current: any
//         ) {
//           return accumulateur + current.width;
//         },
//         0) - imagesBoundingRect[0].width;
//     } else {
//       var first = -imagesBoundingRect[0].height;
//       //end pos => total height
//       var last =
//         imagesBoundingRect.reduce(function (
//           accumulateur: number,
//           current: any
//         ) {
//           return accumulateur + current.height;
//         },
//         0) - imagesBoundingRect[0].height;
//     }

//     wrapY = gsap.utils.wrap(first, last);

//     if (rootMargin) {
//       const header = document.querySelector("header");
//       if (header) {
//         const bounding = header.getBoundingClientRect();
//         rootMarginSize = bounding.height;
//       }
//     }
//   }

//   function _onWheel(e: WheelEvent | any) {
//     console.log(e.deltaY, prevDeltaY, e.deltaY === prevDeltaY);

//     const isScrolling = e.deltaY !== prevDeltaY;
//     // console.log({ isScrolling });

//     prevDeltaY = e.deltaY;
//     // if (!isScrolling) {
//     const direction = e.deltaY > 0 ? 1 : -1;
//     const nextVal = window.innerHeight * direction - rootMarginSize;
//     deltaTotal = deltaTotal - nextVal;
//     console.log(deltaTotal);
//     lerpCache = lerp(lerpCache, deltaTotal, 0.1);
//     // }
//     // console.log(-1 !== -1);
//   }

//   function _update() {
//     items.forEach(function (el, index) {
//       const lerpCacheByDirection =
//         direction === "up" ? lerpCache * -1 : lerpCache;
//       // console.log(lerpCache);
//       if (window.innerWidth < 1080) {
//         // MOBILE
//         const nextY: number = wrapY(
//           lerpCacheByDirection + index * imagesBoundingRect[index].width
//         );
//         el.style.transform = "translate3d(" + nextY + "px,0, 0)";
//         if (typeof onScroll === "function") onScroll(nextY);
//       } else {
//         // DESKTOP
//         let nextY: number = wrapY(
//           lerpCacheByDirection + index * imagesBoundingRect[index].height
//         );
//         if (rootMargin) nextY += rootMarginSize;
//         el.style.transform = "translate3d(0," + nextY + "px, 0)";
//         if (typeof onScroll === "function") onScroll(nextY);
//       }
//       el.style.opacity = "1";
//     });

//     requestAnimationFrame(_update);
//   }

//   /*
//     for easing scroll
//     */
//   function lerp(start: number, end: number, amt: number) {
//     return (1 - amt) * start + amt * end;
//   }

//   function debounce(func: Function, delay: number) {
//     let timerId: any;

//     return function (...args: any) {
//       clearTimeout(timerId);
//       timerId = setTimeout(() => {
//         func.apply(this, args);
//       }, delay);
//     };
//   }
//   function CallLock(toCall: Function, lockout: number) {
//     let argv;
//     let lastCall = 0;
//     let timer = 0;
//     function recall() {
//       timer = 0;
//       lastCall = Date.now();
//       toCall(...argv);
//     }
//     return function (...args) {
//       let now = Date.now();
//       if (timer == 0) {
//         if (now >= lastCall + lockout) {
//           lastCall = now;
//           toCall(...args);
//         } else {
//           argv = args;
//           timer = setTimeout(recall, lastCall + lockout - now);
//         }
//       } else {
//         argv = args; // use most recent arguments
//       }
//     };
//   }
// }
