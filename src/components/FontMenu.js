import DropDownPicker from 'react-native-dropdown-picker'
import { useCustomTheme } from "../hooks/useCustomTheme";
import Arrow from "./svgs/arrow";



const MakeMenu = () => {

    const {setFont} = useCustomTheme();

    let data =[
        {label: 'monospace', value: 'monospace'},
        {label: 'sans', value: 'sans'},
        {label: 'serif', value: 'serif'}
];

    return ( 
        <DropDownPicker
        placeholder="pick one"
        items ={data}
        arrowIcon={Arrow}
        onChangeItem={(value) => {setFont(value);}}
        />
        
    )
}

export default MakeMenu;


