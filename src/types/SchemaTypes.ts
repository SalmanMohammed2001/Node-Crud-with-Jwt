


export interface IUser extends  Document{
    fullName:string,
    email:string,
    password:string,
    activeState:boolean
}