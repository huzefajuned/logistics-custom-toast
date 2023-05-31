"use client";
import React from "react";
/** external deps */
import { notification } from "antd";

/** internal deps */
import {
  Close,
  Success,
  Error,
  Info,
  ErrorStick,
  InfoStick,
  SuccessStick,
} from "../../lib/assets/icons";
const close = () => {};
export type NotificationType = "success" | "info" | "warning" | "error";
export const Toast = ({
  type = "success",
  message,
  description,
}: {
  type?: NotificationType;
  message: string;
  description: string | null;
}) => {
  const key = "key";
  notification[type]({
    placement: "topRight",
    duration: 0,
    // check type & show icon---
    icon:
      type === "success" ? (
        <SuccessStick className="ml-0" />
      ) : type === "info" ? (
        <InfoStick className="ml-0" />
      ) : type === "error" ? (
        <ErrorStick className="ml-0" />
      ) : null,
    description: (
      <div className="flex flex-row    w-full h-full  absolute left-5 p-1 bg-white ">
        <div className="block text-left    items-left w-2/12   ">
          <div
            className={`w-16  flex flex-col  justify-center text-center items-center rounded-[50%] h-16 ${
              type === "info" ? "bg-[#F1F4FF]" : ""
            } ${type === "success" ? "bg-[#F2FFF3]" : ""} ${
              type === "error" ? "bg-[#FFEBF1]" : ""
            }`}
          >
            {type === "success" ? (
              <Success className=" " />
            ) : type === "info" ? (
              <Info className=" " />
            ) : type === "error" ? (
              <Error className=" " />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className=" flex flex-col items-start justify-normal text-left    w-8/12">
          <h2 className="text-secondary text-lg font-semibold  tracking-wider mb-1	">
            {message}
          </h2>
          <p className="text-secondary text-sm tracking-wider ">
            {description}
          </p>
        </div>
      </div>
    ),
    // customized closeIcon
    closeIcon: (
      <a
        style={{
          width: 50,
          height: 40,
          position: "absolute",
          left: 8,
          backgroundColor: "transparent",
        }}
      >
        <Close className="" />
      </a>
    ),

    message: null,
    key,
    onClose: close,
    // style for main toast---
    style: {
      margin: 5,
      padding: 6,
      width: 494,
      height: 96,
      boxShadow: "0px 3px 6px #00000029",
      border: "1px solid #F6F6F6",
      borderRadius: 6,
      backgroundColor: "white",
    },
  });
};
