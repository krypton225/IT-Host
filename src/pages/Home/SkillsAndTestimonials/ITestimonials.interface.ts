import ISetID from 'utils/interfaces/ISetID.interface';

interface ITestimonials extends ISetID {
    name: string;
    personImage: string;
    personType: string;
    personSay: string;
    isActiveCard: boolean;
}

export default ITestimonials;