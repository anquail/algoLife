import { UserAction, UserObject } from '../constants';

// export interface UserState {
//   username: string;
//   _id: number;
//   loginError?: string;
// 
// }
export interface UserState extends UserObject {};

// const initialState: UserState = {
//   username: null,
//   _id: null,
//   algorithms: null

// };

const initialState:UserState={
  username: "user1",
    _id: 1,
    algorithms:[
        {
        created_at:"idk",
        name: "algo1",
        prompt: "testpromp",
        difficulty:"peasy",
        solved:true,
        saved: false,
        solution:"stuff",
        test:'yo',
        _id:1
    },
    
    // {
        
    //     name: "algo2",
    //     prompt: "testpromp2",
    //     difficulty:"peasy2",
    //     solved:false,
    //     saved: false,
    //     solution:"stuff2",
    //     solution:"stuff",
    //     test:'yo',
    //     _id:2
    // }
    // ,
    
    // {
    //     name: "algo3",
    //     prompt: "testpromp2",
    //     difficulty:"peasy2",
    //     solved:false,
    //     saved: false,
    //     solution:"stuff2"

    // }
    // ,
    
    // {
    //     name: "algo4",
    //     prompt: "testpromp2",
    //     difficulty:"peasy2",
    //     solved:true,
    //     saved: false,
    //     solution:"stuff2"

    // }
  ]
}
export interface UserState extends UserObject {}

export interface Algorithm {
  created_at: string;
  difficulty: string;
  name: string;
  prompt: string;
  saved: boolean;
  solution: string;
  solved: boolean;
  test: string;
  _id: number;
}

// const initialState: UserState = {
//   username: null,
//   _id: null,
//   algorithms: [],
// };

export default function UserReducer(
  state = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case 'UPDATE_USER': {
      return {
        ...state,
        username: action.payload.username,
        _id: action.payload._id,
        algorithms: action.payload.algorithms,
      };
    }
    case 'UPDATE_USER_FAIL': {
      return { ...state, loginError: 'Invalid username/password combination' };
      
    }
    case 'UPDATE_ALGOS':{
      return {...state, algorithms: action.payload}
    }
    default: {
      return state;
    }
  }
}
