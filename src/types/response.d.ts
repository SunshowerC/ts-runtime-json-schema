
declare namespace ApiRes {

    export interface User {
        name: string
        sex: string 
        age: number
        phone?: number
    }

    

    export interface Article {
        author: User
        title: string
        date?: number 
        type: 'life' | 'code' 
    }
}

export = ApiRes

