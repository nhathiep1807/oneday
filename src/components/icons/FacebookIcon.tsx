import React from "react";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13.714 14H27.428V27.714H13.714z"
        opacity="0.01"
        transform="rotate(180 13.714 14)"
      ></path>
      <path
        fill="currentColor"
        d="M9.714 2.286A.286.286 0 009.428 2H8a2.726 2.726 0 00-2.858 2.571v1.543H3.714a.286.286 0 00-.286.286v1.486c0 .158.128.285.286.285h1.428V12c0 .158.128.286.286.286h1.714A.286.286 0 007.428 12V8.171h1.497a.286.286 0 00.28-.211l.412-1.486a.286.286 0 00-.275-.36H7.428V4.571A.571.571 0 018 4.057h1.428a.286.286 0 00.286-.286V2.286z"
      ></path>
    </svg>
  );
}

export default FacebookIcon;
