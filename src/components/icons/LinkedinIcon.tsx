import React from "react";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="15"
      fill="none"
      viewBox="0 0 14 15"
      {...props}
    >
      <path
        fill="currentColor"
        d="M14 14.429H27.714V28.143H14z"
        opacity="0.01"
        transform="rotate(180 14 14.429)"
      ></path>
      <path
        fill="currentColor"
        d="M8.943 5.514A3.331 3.331 0 005.6 8.84v3.36a.514.514 0 00.514.514h1.2c.284 0 .515-.23.515-.514V8.84a1.109 1.109 0 011.228-1.103 1.143 1.143 0 011 1.143v3.32c0 .284.23.514.514.514h1.2c.285 0 .515-.23.515-.514V8.84a3.331 3.331 0 00-3.343-3.326z"
      ></path>
      <rect
        width="2.571"
        height="6.686"
        x="2"
        y="6.029"
        fill="currentColor"
        rx="0.9"
      ></rect>
      <circle cx="3.286" cy="3.714" r="1.286" fill="currentColor"></circle>
    </svg>
  );
}

export default LinkedinIcon;
