import HomeScreen from '../../src/screens/HomeScreen';
import {render, waitFor} from '@testing-library/react-native';
import {MyText, MyTextBold} from '../../src/theme/Text';
import {useThemeColors} from '../../src/hooks/useThemeColors';
import {useCustomTheme} from '../../src/hooks/useCustomTheme';


//list:

//test font changes

describe('homescreen', () => {
    it('Should render screen', () => {
    const {getByTestId} = render(<HomeScreen/>); 
      const HomeScreen = getByTestId('HomeScreen');
        expect(HomeScreen).toBeDefined();
    });
});




describe('MyText', () => {



    it('Should render MyText', () => {
        const {getByTestId} = render(<HomeScreen/>); 
      const HomeScreen = getByTestId('HomeScreen');
    const {getByTestId} = render(<MyText/>);





      expect(customText.props.style).toHaveProperty('fontFamily', font);
    });
  });

//test theme changes

//test search bar empty

//test search bar with typo

//test search bar with correct word

//test audio

//hoverstates?????

/*
describe('', () => {
    it('Should render screen', () => {
    const {getByTestId} = render(<HomeScreen/>); 
      const customText = getByTestId('');
        expect('')
    });
});
 */