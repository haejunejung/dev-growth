import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  cssStyle?: CSSProperties;
  color?: string;
  textStyle:
    | "H1"
    | "T1"
    | "T2"
    | "T2-light"
    | "T3"
    | "T4"
    | "T5"
    | "B1"
    | "B2"
    | "B2-bold"
    | "B3"
    | "C1"
    | "C2"
    | "C2-medium"
    | "C2-bold"
    | "Logo";
}

export const TextElement = ({
  children,
  cssStyle,
  color,
  textStyle,
}: Props) => {
  const textElementProps = (): CSSProperties => {
    switch (textStyle) {
      case "H1": {
        return {
          fontWeight: "bold",
          fontSize: 20,
        };
      }
      case "T1":
        return {
          fontSize: 20,
          fontWeight: 700,
        };
      case "T2":
        return {
          fontSize: 22,
          fontWeight: 700,
        };
      case "T2-light":
        return {
          fontSize: 22,
          fontWeight: 500,
        };
      case "T3":
        return {
          fontSize: 24,
          fontWeight: 700,
        };
      case "T4":
        return {
          fontSize: 26,
          fontWeight: 700,
        };
      case "T5":
        return {
          fontSize: 30,
          fontWeight: 700,
        };
      case "B1":
        return {
          fontSize: 15,
          fontWeight: 500,
        };
      case "B2":
        return {
          fontSize: 17,
          fontWeight: 500,
        };
      case "B2-bold":
        return {
          fontSize: 17,
          fontWeight: 700,
        };
      case "B3":
        return {
          fontSize: 19,
          fontWeight: 500,
        };
      case "C1":
        return {
          fontSize: 11,
          fontWeight: 400,
        };
      case "C2":
        return {
          fontSize: 13,
          fontWeight: 400,
        };
      case "C2-medium":
        return {
          fontSize: 13,
          fontWeight: 500,
        };
      case "C2-bold":
        return {
          fontSize: 13,
          fontWeight: 700,
        };
      case "Logo":
        return {
          fontSize: 20,
          fontWeight: 800,
        };
    }
  };

  return (
    <p
      style={{
        textAlign: "center",
        color: color ?? "#212428",
        margin: 0,
        ...cssStyle,
        ...textElementProps(),
      }}
    >
      {children}
    </p>
  );
};
