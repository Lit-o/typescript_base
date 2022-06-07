let bbb = 15;
bbb = 'not a num'


let newB: number | 'not a num' = 12;
newB = 'not a num';
newB = newB + 2


let isItReal = true as boolean | null
isItReal = 15;


const MamboNames: Array<string | number> = ['Mambonito', 'MambS', 15]
const MamboNamesAgain: (string | number)[] = ['Mambonito', 'MambS', 15]
const MamboNamesWithoutNum: string [] = ['Mambonito', 'MambS', 15]


let lookingGood: 'yep' | 'nope' | 'pretty fine' 
lookingGood = "yep"


type lookingGood = 'yep' | 'nope' | 'pretty fine' 
const MamboS: lookingGood = "yep"
const Jomo: lookingGood = "nope"
const Lessy: lookingGood = "pretty fine"


type AddressType = {
    country?: string
    city: string
    street?: string
    houseNumber?: number | null
}
type SuperUserType = {
    methodOne: Function
    methodTwo?: (myPropsForFunct: number) => void
    name: string
    age: number
    isUserMambo: boolean
    adress: AddressType | null
}

const SuperMambo: SuperUserType = {
    adress: {
        city: '222'
    },
    age: 144,
    isUserMambo: true,
    methodOne: () => {},
    name: 'Mambo',
}

const summ: Function = (a = 11, b: number, c: any) => {
    return a + b
}

const sum: (a: number, b: number) => string = (a, b) => {
    return a + b + ''
}

type SummarU = (a: number, b: number) => string;

const su: SummarU = (a, b) => {
    return a + 'SummarU' + b 
}


// STRONG BIG REACT THINGS

// State stuff
const initialState = {
    a: null as number | null,
    b: "rapupu" as 'rapupu'| 'paruru' | null,
    c: true as boolean | null,
    adresses: [] as Array<AddressType>
}
export type initialStateForRepeatComponentType = typeof initialState;

const state: initialStateForRepeatComponentType = {
    a: 5,
    b: "rapupu",
    c: true,
    adresses: []    
}

// Actions stuff
const GET_UP = 'APP/MAIN_PAGE/GET_UP'
const GET_DOWN = 'APP/MAIN_PAGE/GET_DOWN'

type GetUpActionType = {
    type: typeof GET_UP,
    payload: Array<string>
}
type GetDownActionType = {
    type: typeof GET_DOWN,
    payload: Array<string>
}

const actionGetUp: GetUpActionType = {
    type: GET_UP,
    payload: []
}
const actionGetDown: GetDownActionType = {
    type: GET_DOWN,
    payload: []
}

// Another solution
export enum GetActionTypes {
     GET_UP = 'APP/MAIN_PAGE/GET_UP',
     GET_DOWN = 'APP/MAIN_PAGE/GET_DOWN'
}
interface GetUpActionType2 {
    type: GetActionTypes.GET_UP
    payload: Array<string>
}
interface GetDownActionType2 {
    type: GetActionTypes.GET_DOWN
    payload: Array<string>
}
const actionGetUp2: GetActionsTypeRoot = {
    type: GetActionTypes.GET_UP,
    payload: []
}
const actionGetDown2: GetActionsTypeRoot = {
    type: GetActionTypes.GET_DOWN,
    payload: ['Mambo', 'Mamno']
}

export type GetActionsTypeRoot = GetDownActionType2 | GetUpActionType2


export const empty = {}