import "normalize.css";
import * as React from "react";
import { Icon } from "./styles";
interface Props {
  /** Define position and icon's label */
  label?: { pos: string; text: string };
  /** Define img to load */
  img: string | React.ReactElement<any>;
  /** Define if icon is filled or outlined */
  theme?: "outline" | "fill" | "none";
  /** Define icon's color */
  color?: string;
  /** Define component size */
  size?: string;
  /** Define the custom class name to give at component */
  customClass?: string | undefined;
}

interface State {}

export default class extends React.Component<Props, State> {
  public readonly state: State = {};

  public render() {
    const { label, img } = this.props;
    return (
      <Icon {...this.props}>
        {img}
        {label && <span>{label.text}</span>}
      </Icon>
    );
  }
}
