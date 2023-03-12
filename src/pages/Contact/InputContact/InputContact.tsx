import IInputContact from "./IInputContact.interface";

const InputContact = ({ type, placeHolderText }: IInputContact) => {
    return (
        <>
            {
                type === "normal" ?
                    (<input type="text" placeholder={`${placeHolderText}`} className="input-general" />) :

                    (<textarea placeholder={`${placeHolderText}`} className="input-general no-resize-x"></textarea>)
            }
        </>
    );
};

export default InputContact;