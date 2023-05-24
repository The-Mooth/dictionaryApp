import DropDownPicker from 'react-native-dropdown-picker'
import { useCustomTheme } from "../hooks/useCustomTheme";
import Arrow from "./svgs/arrow";



const MakeMenu = () => {

    const {font, setFont} = useCustomTheme();

    let data =[
        {label: 'monospace', value: 'monospace'},
        {label: 'sans', value: 'sans'},
        {label: 'serif', value: 'serif'}
];

    return ( 
        <DropDownPicker
        containerStyle={{width: '60%',}}
        defaultValue='monospace'
        placeholder="pick one"
        items ={data}
        //arrowIcon={Arrow}
        onChangeItem={(item) => {setFont(item.value);}}
        />
        
    )
}

export default MakeMenu;


