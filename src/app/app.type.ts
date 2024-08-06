export interface Books {
    id?: string,
    bookTitle: string,
    borrower: string,
    status: boolean,
    borrowDate?: string,
    returcnDate?: string,
}
export interface ConfigDataLogin  {
    email?: string,
    password?: string
}