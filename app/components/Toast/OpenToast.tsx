// import React from "react";
// import Image from "next/image";

// import {
//   CheckIcon,
//   RedStick,
//   BlueStick,
//   GreenStick,
//   BlueCheck,
//   GreenCheck,
//   RedCheck,
// } from "../../../public/assets/icons/icons";

// type NotificationType = "success" | "error" | "info";
// interface NotificationProps {
//   api: any;
//   type: NotificationType;
//   message: string;
//   description: string;
// }

// const OpenToast = (props: NotificationProps) => {
//   const { type, message, description } = props;
//   let icon: any[];
//   // conditionaly  show sideLine icon and checkIcon
//   if (type === "info") {
//     icon = [CheckIcon, CheckIcon];
//   } else if (type === "success") {
//     icon = [CheckIcon, CheckIcon];
//   } else { 
//     icon = [CheckIcon, CheckIcon];
//   }
//   props.api.open({
//     // completely  custom Toast
//     description: (
//       <div className="flex flex-row justify-evenly  text-left">
//         <div className="flex flex-row   items-center w-3/12">
//           {/* ( <CheckIcon className="bg-white" />){" "} */}
//           {React.createElement(icon[0], { className: "bg-slate-500" })}

//           {React.createElement(icon[1], {
//             className: `w-14 h-14 rounded-[50%] object-contain p-4 ml-4 ${
//               type === "info" ? "bg-[#F1F4FF]" : ""
//             } ${type === "success" ? "bg-[#F2FFF3]" : ""} ${
//               type === "error" ? "bg-[#FFEBF1]" : ""
//             }`,
//           })}

//           {/*

//           <Image
//             className={`w-14 h-14 rounded-[50%] object-contain p-4  ml-4 ${
//               type === "info" ? "bg-[#F1F4FF]" : ""
//             } ${type === "success" ? "bg-[#F2FFF3]" : ""} ${
//               type === "error" ? "bg-[#FFEBF1]" : ""
//             }`}
//             src={icon[1]}
//             alt="icon"
//           /> */}
//         </div>
//         <div className="m-auto flex flex-col items-start justify-between text-left mr-10 h-full  w-9/12">
//           <h2 className="text-secondary text-lg font-semibold  tracking-wider mb-2	">
//             {message}
//           </h2>
//           <p className="text-secondary text-sm tracking-wider">{description}</p>
//         </div>
//       </div>
//     ),
//     // message null, because i have alraedy put--  message, description , type, inside description for custom Toast.
//     message: null,
//     // fixed position to "topRight" more options are available --- "topLeft" "bottomLeft" "bottomRight"
//     placement: "bottomRight",
//     // closeIcon: true,
//     //toast closeIcon

//       // <Image
//       //   src={closeSvg}
//       //   alt="closeIcon"
//       //   height={24}
//       //   width={24}
//       //   style={{
//       //     all: "unset",
//       //     backgroundColor: "transparent",
//       //     marginLeft: 10,
//       //     marginBottom: 5,
//       //   }}
//       // />
//     ),
//     //  same styles from adobe design
//     style: {
//       margin: 5,
//       padding: 5,
//       width: 494,
//       height: 96,
//       boxShadow: "0px 3px 6px #00000029",
//       border: "1px solid #F6F6F6",
//       borderRadius: 6,
//     },
//   });
// };

// export default OpenToast;
