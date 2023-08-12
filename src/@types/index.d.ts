export interface EduInfoType{
    name: string,
    country: string,
    website: string,
    startDate: string,
    endDate: string,
    degree: string,
    field: string,
    Grade: number,
    description:string
}

export type EduInfoContextType = {
    name: string,
    updateName:(name:string) => void,
    eduInfo: EduInfoType[],
    updateEduInfo : (EduInfo:EduInfoType) => void,
    deleteEduInfo: (index:number) => void
} 

