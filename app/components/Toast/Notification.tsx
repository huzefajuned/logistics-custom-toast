import greenLine from "../../../public/assets/greenLine.png";
import redLine from "../../../public/assets/redLine.png";
import blueLine from "../../../public/assets/blueLine.png";
import greenCheck from "../../../public/assets/greenCheck.png";
import redCheck from "../../../public/assets/redCheck.png";
import blueCheck from "../../../public/assets/blueCheck.png";
import closeToast from "../../../public/assets/closeToast.png";
import { Button, notification } from "antd";
import Image from "next/image";
  
  
const openNotification = (props: any) => {
    const { type, message, description } = props;
    let icon: any[];
    // conditionaly  show sideLine image and Check image
    if (type === "info") {
      icon = [blueLine, blueCheck];
    } else if (type === "success") {
      icon = [greenLine, greenCheck];
    } else {
      icon = [redLine, redCheck];
    }
    props.api.open({
      // styles from adobe design
      style: {
        margin: 5,
        padding: 5,
        width: 494,
        height: 96,
        boxShadow: "0px 3px 6px #00000029",
        border: "1px solid #F6F6F6",
        borderRadius: 6,
      },
      // completely  custom Toast
      description: (
        <div className="flex flex-row justify-evenly  text-left">
          <div className="flex flex-row   items-center w-3/12">
            <Image src={icon[0]} alt="icon" height={72} className="m-0" />
            <Image
              className={`w-14 h-14 rounded-[50%] object-contain p-4  ml-4 ${
                type === "info" ? "bg-[#F1F4FF]" : ""
              } ${type === "success" ? "bg-[#F2FFF3]" : "bg-[#FFEBF1]"}`}
              src={icon[1]}
              alt="icon"
            />
          </div>
          <div className="m-auto flex flex-col items-start justify-between text-left mr-10 h-full  w-9/12">
            <h2 className="text-[#000C1C] text-lg font-semibold  tracking-wider mb-2	">
              {message}
            </h2>
            <p className="text-[#000C1C] text-sm tracking-wider">
              {description}
            </p>
          </div>
        </div>
      ),
      message: null,
      placement: "topRight",
      // custom toast close icon
      closeIcon: (
        <Image
          src={closeToast}
          alt="closeIcon"
          height={24}
          width={24}
          style={{
            all: "unset",
            backgroundColor: "transparent",
            marginLeft: 10,
            marginBottom: 5,
          }}
        />
      ),
    });
  };

export default openNotification;