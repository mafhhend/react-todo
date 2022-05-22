import { useState } from "react";

const useToggle = defaultValue => {
    //defaultvalue: true or false;
    const [value, setValue] = useState(defaultValue)

    const toggleValue = value => {
        // don't use () for typeof
        setValue(currentValue => typeof value === "boolean" ? value : !currentValue)
    }

    return [value, toggleValue]
}


export default useToggle;