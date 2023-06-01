import HomeScreen from "../../src/screens/HomeScreen";
import { render, waitFor, fireEvent } from "@testing-library/react-native";
import { MyText, MyTextBold } from "../../src/theme/Text";
import { useThemeColors } from "../../src/hooks/useThemeColors";
import { useCustomTheme } from "../../src/hooks/useCustomTheme";


//list:

//test font changes

test("renders correctly", async () => {
  const { getByTestId } = render(<HomeScreen />);

  await waitFor(
    () => {
      const component = getByTestId("mainView");
      expect(component).not.toBeNull();
    },
    { timeout: 600 }
  );
});

test("Text input updates correctly", async () => {
  const { getByTestId } = render(<HomeScreen />);

  await waitFor(
    () => {
      const component = getByTestId("myTextInput");
      fireEvent.changeText(component, "asdfasdfa");
      expect(component.props.value).toEqual("asdfasdfa");
    },
    { timeout: 5000 }
  );
});

test("has correct background color", async () => {
  const { getByTestId } = render(<HomeScreen />);

  await waitFor(
    () => {
      const header = getByTestId("mainView");
      const style = header.props.style;

      let styleObj = {};

      if (!Array.isArray(style)) {
        styleObj = style;
      } else {
        styleObj = style.reduce((acc, curr) => {
          return { ...acc, ...curr };
        }, {});
      }

      expect(styleObj.backgroundColor).toBe("hsl(0, 0%, 100%)");
    },
    { timeout: 5000 }
  );
});


test("Theme changes work", async () => {
  const { getByTestId } = render(<HomeScreen />);


  const button = getByTestId("themeSwitch");
      fireEvent(button, "onValueChange", true)
    await waitFor(
      () => {
        expect(button.props.value).toBe(true);
      });

 /*
      const header = getByTestId("mainView");
      let styleObj = {};

      let styles = {};
  if (Array.isArray(header.props.style)) {
    styles = header.props.style.reduce((acc, cur) => {
      return { ...acc, ...cur };
    }, {});
  } else {
    styles = header.props.style;
  }

      console.log(styles.backgroundColor);
      expect(styles.backgroundColor).toBe("hsl(0, 0%, 2%)");*/
    
});
 
/*
test("Theme changes work", () => {
  const { colors } = useThemeColors();
  const { theme, setTheme, font, setFont } = useCustomTheme();
  
  setTheme("dark");
  expect(theme).toBe("dark");

});*/


//test theme changes

//test search bar empty
test("search is empty", async () => {
  const { getByTestId, getByText } = render(<HomeScreen />);

  await waitFor(
    () => {
      const component = getByTestId("mainView");
      const searchButton = getByTestId("search");
      fireEvent.press(searchButton);
      const errormsg = getByText("Whoops, can't be empty...");
      expect(errormsg).not.toBeNull();
    
    },
    { timeout: 600 }
  );
});
//test search bar with typo
test("search is a typo", async () => {
  const { getByTestId, getByText } = render(<HomeScreen />);
  const input = getByTestId("myTextInput");

  fireEvent.changeText(input, "asdfasdfa");

  const searchButton = getByTestId("search");
  fireEvent.press(searchButton);
  await waitFor(
    () => {
      
      const errormsg = getByText("No Definitions Found");
      expect(errormsg).not.toBeNull();
    
    },
    { timeout: 600 }
  );
});
//test search bar with correct word
test("search a correct word", async () => {
  const { getByTestId, getByText } = render(<HomeScreen />);
  const input = getByTestId("myTextInput");

  fireEvent.changeText(input, "keyboard");

  const searchButton = getByTestId("search");
  fireEvent.press(searchButton);
  await waitFor(
    () => {
      
      const msg = getByText("Source");
      expect(msg).not.toBeNull();
    
    },
    { timeout: 600 }
  );
});
//test audio
test("audio works", async () => {
  const { getByTestId} = render(<HomeScreen />);
  const input = getByTestId("myTextInput");

  fireEvent.changeText(input, "keyboard");

  const searchButton = getByTestId("search");
  fireEvent.press(searchButton);
  await waitFor(
    () => {
      
      const playButton = getByTestId("playButton");
      expect(playButton).not.toBeNull();
    
    },
    { timeout: 600 }
  );
});


//hoverstates?????
