"use client";
import { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Highlight, { defaultProps, type Language } from "prism-react-renderer";
import lightTheme from "prism-react-renderer/themes/nightOwlLight";
import darkTheme from "prism-react-renderer/themes/nightOwl";

interface CodeProps {
  code: string;
  show: boolean;
  language: Language;
  animated?: boolean;
  animationDelay?: number;
}

const Code: FC<CodeProps> = ({
  code,
  language,
  show,
  animated,
  animationDelay,
}) => {
  const [text, setText] = useState(animated ? "" : code);
  const { theme: applicationTheme } = useTheme();

  useEffect(() => {
    if (show && animated) {
      let i = 0;
      const timer = setTimeout(() => {
        const intervalId = setInterval(() => {
          setText(code.slice(0, i));
          i++;
        }, 15);

        if (i > code.length) {
          clearInterval(intervalId);
        }
      }, animationDelay || 150);

      return () => clearTimeout(timer);
    }
  }, [show, animated, animationDelay]);

  const lines = text.split(/\r\n|\r|\n/).length;
  const theme = applicationTheme === "light" ? lightTheme : darkTheme;

  return (
    <Highlight {...defaultProps} code={text} language={language} theme={theme}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={
            className +
            "transition-all w-fit bg-transparent duration-100 py-0 no-scrollbar"
          }
          style={{
            maxHeight: show ? lines * 24 : 0,
            opacity: show ? 1 : 0,
          }}
        >
          {tokens.map((line, i) => {
            // eslint-disable-next-line no-unused-vars
            const { key, ...rest } = getLineProps({ line, key: i });
            return (
              <div key={`line-${i}`} style={{ position: "relative" }} {...rest}>
                {line.map((token, index) => {
                  // eslint-disable-next-line no-unused-vars
                  const { key, ...props } = getTokenProps({ token, i });
                  return <span key={index} {...props} />;
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
