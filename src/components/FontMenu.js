import DropDownPicker from 'react-native-dropdown-picker'
import { useCustomTheme } from "../hooks/useCustomTheme";
import {useState} from 'react';
import Arrow from "./svgs/arrow";



const MakeMenu = () => {

    //const {font, setFont} = useCustomTheme();
    const {open, setOpen} = useState(false);
    const [value, setValue] = useState(null);
    const {items, setItems} = useState([
        {label: 'monospace', value: 'monospace'},
        {label: 'sans', value: 'sans'},
        {label: 'serif', value: 'serif'}
]);

    return ( 

        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
        />

        /*
        <DropDownPicker
        containerStyle={{width: '60%',}}
        defaultValue='monospace'
        placeholder="pick one"
        items ={data}
        open ={open}
        setOpen ={setOpen}
        //arrowIcon={Arrow}
        onValueChange={(item) => {setFont(item.value);}}
        />
        */
        
    );
}

export default MakeMenu;


