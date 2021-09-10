import { notification as notify } from "antd";
import "./styles.css";

export const notification = (type, message) => {
  notify[type]({
    message: message,
    placement: "topRight",
    duration: 3
  });
};