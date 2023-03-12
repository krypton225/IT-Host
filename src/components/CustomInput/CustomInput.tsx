import ICustomInput from "./ICustomInput.interface";

const CustomInput = ({ isNormalInput, typeField, placeHolderText }: ICustomInput) => {
    return (
        <>
            {
                isNormalInput ?
                    (<input type={typeField} placeholder={`${placeHolderText}`} className="input-general" />) :

                    (<textarea placeholder={`${placeHolderText}`} className="input-general no-resize-x"></textarea>)
            }
        </>
    );
};

export default CustomInput;