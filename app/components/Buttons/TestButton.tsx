import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { Toast } from "../Check/Toast";

const TestButton: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="w-full h-screen  flex flex-row justify-center items-center text-center ">
      <Button
        type="default"
        className="bg-green-400"
        onClick={() =>
          Toast({
            type: "info",
            message: "Info !",
            description: "This is Info Description. please check this button",
          })
        }
      >
        Info
      </Button>
      <Button
        type="default"
        className="bg-blue-800 m-10"
        onClick={() =>
          Toast({
            type: "success",
            message: "Success !",
            description:
              "This is Success Description. please check this button",
          })
        }
      >
        Success
      </Button>{" "}
      <Button
        type="default"
        className="bg-red-400 "
        onClick={() =>
          Toast({
            type: "error",
            message: "Error !",
            description: "This is Error Description. please check this button",
          })
        }
      >
        Error
      </Button>
      <Button
        type="default"
        className="bg-red-400 ml-5"
        onClick={() =>
          Toast({
            type: "info",
            message: "Info !",
            description: "This is Info Description.please check this button",
          })
        }
      >
        Info
      </Button>
    </div>
  );
};

export default TestButton;
