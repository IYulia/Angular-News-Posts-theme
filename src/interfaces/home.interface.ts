// export interface IHome{
//     todo: IToDoItem[];
// }
export interface IToDoItem {
    taskNumber: number | string;
    taskTitle: string;
    taskDesc: string;
    checked: boolean;
    // calcFunc(a: number, b: number): void;
    // calFunc2(): Promise<number>;
}

export enum ICars{
    Audi = "Audi",
    BMW = "BMV",
    VAZ = "VAZ"
}