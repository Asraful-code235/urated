"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function BackgroundBeams({ className }: { className?: string }) {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
    "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
    "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
    "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
    "M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819",
    "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
    "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
    "M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795",
    "M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787",
    "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
    "M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771",
    "M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763",
    "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
    "M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747",
    "M-261 -325C-261 -325 -193 80 271 207C735 334 803 739 803 739",
    "M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731",
    "M-247 -341C-247 -341 -179 64 285 191C749 318 817 723 817 723",
    "M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715",
    "M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707",
  ];

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full bg-neutral-950 [mask-image:radial-gradient(circle_at_center,white,transparent)]",
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_4173_1357)">
          <g filter="url(#filter0_f_4173_1357)">
            {paths.map((path, index) => (
              <motion.path
                key={`path-${index}`}
                d={path}
                stroke={`url(#linearGradient-${index})`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="0 0"
                fill="none"
                initial={{
                  strokeDasharray: "0 0",
                }}
                animate={{
                  strokeDasharray: ["0 0", "40 40", "0 0"],
                }}
                transition={{
                  duration: Math.random() * 20 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 10,
                }}
              />
            ))}
          </g>
        </g>
        <defs>
          {paths.map((_, index) => (
            <linearGradient
              key={`gradient-${index}`}
              id={`linearGradient-${index}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="32.5%" stopColor="#6344F5"></stop>
              <stop offset="100%" stopColor="#AE48FF" stopOpacity="0"></stop>
            </linearGradient>
          ))}
          <clipPath id="clip0_4173_1357">
            <rect width="696" height="316" fill="white"></rect>
          </clipPath>
          <filter
            id="filter0_f_4173_1357"
            x="-420.001"
            y="-249"
            width="1135.67"
            height="1154.67"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="10"
              result="effect1_foregroundBlur_4173_1357"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
