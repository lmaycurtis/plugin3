import React from "react";
import { Icon } from "@contentstack/venus-components";
import ContentstackSDK from "@contentstack/app-sdk";

export default ContentstackSDK.init().then(async (sdk) => {
  const extensionObj = await sdk["location"];
  const RTE = await extensionObj["RTEPlugin"];
  if (!RTE) return;

  const Highlight = RTE("highlight", () => ({
    title: "Highlight",
    icon: <Icon style={{ padding: "0 6px" }} icon="Edit" size="original" />,
    render: (props: any) => {
      return (
        <span style={{ background: "rgba(0, 255, 0, 1)" }}>
          {props.children}
        </span>
      );
    },
    displayOn: ["toolbar"],
    elementType: ["text"],
  }));

  return {
    Highlight,
  };
});
