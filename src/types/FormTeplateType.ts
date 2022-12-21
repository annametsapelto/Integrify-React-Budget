import { CategoryType } from "./CategoryType"
import { MoneyAction } from "./MoneyAction"

export interface FormTemplateType {
    formName: string
    reason: string
//    categories: CategoryType[]
    list: MoneyAction[]
    setList: React.Dispatch<React.SetStateAction<MoneyAction[]>> 
}