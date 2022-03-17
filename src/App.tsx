import './App.css';

let a: number | null = 10
const name: string = 'Mambo'
let isMambo: boolean = true

const names: Array<string | number> = ["Mambo", "Not Mambo", "Mambo's friend", 0]
const names2: string[] = ["Mambo", "Not Mambo", "Mambo's friend"]
// alert(names2[0].toUpperCase())

// our custom type by string
let sex: 'male' | 'female' | 'not sure' = 'male';
sex = 'female'

type manSex = 'male' | 'female' | 'not sure'
const man: manSex = 'male'
const woman: manSex = 'female'
const notSure: manSex = 'not sure'

type UserType = {
  sayMyName: Function
  sayHello?: (message: string) => void
  name: string
  age: number
  isMambo: boolean
  adress: AddressType | null
}

type AddressType = {
  // ? = not necessary property
  country?: string
  city: string

}

const user: UserType = {
  sayMyName(message: string) { alert(this.name) },
  name: 'Carlos',
  age: 35,
  isMambo: false,
  adress: {
    city: 'Varo',
  }
}


// we must give type to param, or at least default arguments
// type any give any type - often used when we do refactoring step by step
const summ: Function = (a = 10, b: number, c: any) => {
  return a + b
}

const summ2: (a: number, b: number) => number = (a = 10, b: number) => {
  return a + b
}

type SummType = (a: number, b: number) => number;
const summ3: SummType = (a, b) => {
  return a + b
}


const initialState = {
  a: null as number | null,
  b: "varondo" as string | null,
  c: true as boolean | null,
  adresses: [] as Array<AddressType>
}
export type initialStateType = typeof initialState

const state2: initialStateType = {
  a: null,
  b: 'rogota',
  c: false,
  adresses: [{ city: 'faf', country: 'sads' }]
}



const GET_TASKS = 'APP/PAGE/GET_TASKS'
type GetTasksActionType = {
  id: number,
  type: typeof GET_TASKS
}
const action: GetTasksActionType = {
  id: 32,
  type: GET_TASKS
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
