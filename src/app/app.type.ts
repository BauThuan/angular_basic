export interface Books {
    id?: string,
    bookTitle: string,
    borrower: string,
    status: boolean,
    borrowDate?: string,
    returnDate?: string,
}