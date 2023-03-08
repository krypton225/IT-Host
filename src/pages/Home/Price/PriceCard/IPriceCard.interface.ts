import ISetID from 'utils/interfaces/ISetID.interface';

interface IPriceCard extends ISetID {
    titleText: string;
    price: {
        number: number;
        duration: string;
    };
    dataItemsList: Array<string>;
    isActive?: boolean;
    bgColor: string;
}

export default IPriceCard;