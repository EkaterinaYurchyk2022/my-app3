const arrName = ['Katya', 'Anya', 'Masha', 'Ivan', 'Sergey', 'Danila', 'Sasha', 'Denis', 'Sveta', 'Kolya']
const arrAge = [12, 18, 56, 84, 96, 32, 56, 48, 24, 65]

export type objType = {
    id: number
    name: string
    age: number
}

export const arr: Array<objType> = new Array(10).fill(null).map((el, index) => ({
    id: index + 1,
    name: arrName[index],
    age: arrAge[index]
}))