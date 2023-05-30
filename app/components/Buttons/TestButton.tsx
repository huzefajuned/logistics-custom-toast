import React, { useEffect, useState } from "react";
import { Button, notification } from "antd";

import OpenToast from "../Toast/OpenToast";

const TestButton: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const [api, contextHolder] = notification.useNotification();

  if (!mounted) {
    return null;
  }
  return (
    <div className="w-full h-screen  flex flex-row justify-center items-center text-center ">
      {contextHolder}
      <Button
        type="default"
        className="bg-green-400"
        onClick={() =>
          OpenToast({
            api: api,
            type: "success",
            message: "Success!",
            description:
              "This is Success Description. please check this button",
          })
        }
      >
        success
      </Button>
      <Button
        type="default"
        className="bg-blue-400 m-10"
        onClick={() =>
          OpenToast({
            api: api,
            type: "info",
            message: "info!",
            description: "This is info Description. please check",
          })
        }
      >
        info
      </Button>{" "}
      <Button
        type="default"
        className="bg-red-400"
        onClick={() =>
          OpenToast({
            api: api,
            type: "error",
            message: "Error!",
            description: "This is Error Description. please check this button",
          })
        }
      >
        error
      </Button>
    </div>
  );
};

export default TestButton;
