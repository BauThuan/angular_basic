export interface Books {
    id?: string,
    bookTitle: string,
    borrower: string,
    status: boolean,
    borrowDate?: string,
    returcnDate?: string,
}
export interface Foramt_Login  {
    identifier: string,
    password: string
}

export interface Format_SignUp {
    username: string,
    email: string,
    password: string,
    role: number
}