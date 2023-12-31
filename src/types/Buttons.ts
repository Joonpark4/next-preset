export interface ButtonProps {
  content: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  width?: string;
  height?: string;
  props?: any;
}

export interface TwoTabBtnProps {
  tab1: string;
  tab2: string;
  isFirstTab: boolean;
  setIsFirstTab: React.Dispatch<React.SetStateAction<boolean>>;
}
