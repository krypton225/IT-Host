import ISetID from 'utils/interfaces/ISetID.interface';

interface ISkills extends ISetID {
    skillName: string;
    percent: number;
    bgColor: string;
}

export default ISkills;