export interface EduInfoType{
    name: String,
    country: String,
    website: String,
    startDate: String,
    endDate: String,
    degree: String,
    field: String,
    Grade: Number,
    description:String
}

export type EduInfoContextType = {
    name: string,
    updateName:(name:string) => void,
    eduInfo: EduInfoType[],
    updateEduInfo : (EduInfo:EduInfoType) => void
} 

