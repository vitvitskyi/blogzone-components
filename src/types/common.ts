export type ButtonProps = {
  size?: string;
  textColor?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  title?: string;
  textSize?: string;
  rounded?: number;
  hover?: string;
  margin?: string;
  disabled?: boolean;
  [x: string]: any;
};

export type InputProps = {
  type: string;
  label?: string;
  labelColor?: string;
  labelSize?: string;
  labelFont?: string;
  labelWeight?: string;
  width?: string;
  height?: string;
  borderWidth?: string;
  borderColor?: string;
  borderRadius?: string;
  placeholder?: string;
  inputTextColor?: string;
  backgroundColor?: string;
  disabled?: boolean;
  helpText?: string;
  helpTextStyles?: string;
  margin?: string;
  inputTextSize?: string;
  inputTextWeight?: string;
  [x: string]: any;
};

export type ParticipantData = {
  id: string;
  name: string;
  status: string;
};

export type ChatData = {
  username?: string;
  message: string;
  time: string;
  me: boolean;
};

export type ProfileData = {
  fullName: string;
  nickName: string | number;
  url: string;
  email: string;
  role: string;
};

export type MessageProps = {
  message: string;
  time: string;
  username?: string;
  me: boolean;
};
