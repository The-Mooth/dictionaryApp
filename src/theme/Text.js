import { Text as DefaultText } from "react-native";
import { useThemeColors } from "../hooks/useThemeColors";
import { useCustomTheme } from "../hooks/useCustomTheme";
//import font, then set fonts dynamically

const MyText = ({ style, ...rest }) => {
  const { colors } = useThemeColors();
  const { font } = useCustomTheme();

  return (
    <DefaultText
      style={[
        {
          color: colors.text,
          fontFamily: font + "-regular",
          fontSize: 16,
          maxWidth: "99%",
        },
        style,
      ]}
      {...rest}
    />
  );
};

const MyTextSub = ({ style, ...rest }) => {
  const { colors } = useThemeColors();
  const { font } = useCustomTheme();

  return (
    <DefaultText
      style={[
        {
          color: colors.subText,
          fontFamily: font + "-regular",
          fontSize: 16,
          maxWidth: "99%",
        },
        style,
      ]}
      {...rest}
    />
  );
};

const MyTextBold = ({ style, ...rest }) => {
  const { colors } = useThemeColors();
  const { font } = useCustomTheme();
  return (
    <DefaultText
      style={[
        {
          color: colors.boldText,
          fontFamily: font + "-bold",
          fontSize: 16,
          maxWidth: "99%",
        },
        style,
      ]}
      {...rest}
    />
  );
};

const MyTextItalic = ({ style, ...rest }) => {
  const { colors } = useThemeColors();
  const { font } = useCustomTheme();
  return (
    <DefaultText
      style={[
        {
          color: colors.text,
          fontFamily: font + "-italic",
          fontSize: 16,
          maxWidth: "99%",
        },
        style,
      ]}
      {...rest}
    />
  );
};

const MyTextDot = ({ style, ...rest }) => {
  const { colors } = useThemeColors();
  const { font } = useCustomTheme();
  return (
    <DefaultText
      style={[
        { color: "hsl(274, 82%, 60%)", fontSize: 16, marginRight: 10 },
        style,
      ]}
      {...rest}
    />
  );
};

export { MyText, MyTextSub, MyTextBold, MyTextItalic, MyTextDot };
export default MyText;
