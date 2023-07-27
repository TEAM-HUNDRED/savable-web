import ToastBar from "components/ToastBar";
import React, { useState, useEffect, ReactNode } from "react";

interface IToastContext {
  showToast: ({ description, toastVisible }: IToastShowToastParams) => void;
}

interface IToastShowToastParams {
  description: string;
  toastVisible: boolean;
}

export const ToastContext = React.createContext<IToastContext>({
  showToast: ({ description, toastVisible }: IToastShowToastParams) => {},
});

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toastVisible, setToastVisible] = useState(false);
  const [description, setDescription] = useState("");

  const showToast = ({ description, toastVisible }: IToastShowToastParams) => {
    setToastVisible(toastVisible);
    setDescription(description);
  };

  useEffect(() => {
    if (toastVisible)
      setTimeout(() => {
        setToastVisible(false);
      }, 1000);
  }, [toastVisible]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toastVisible && <ToastBar description={description} />}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
