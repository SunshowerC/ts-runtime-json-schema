
declare namespace ApiRes {

    export interface User {
        name: string
        age: number
        phone?: number
        se?: string         
    }

    

    export interface Article {
        author: User
        title: string
        date?: number 
        type: 'life' | 'code' | 'sport'
    }
}


