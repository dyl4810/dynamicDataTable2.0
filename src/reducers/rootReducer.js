const initState = {
  treeDataNested: [
    {
       id: 1,
        name: "root",
        children: [      
          {
            id: 2,
            name: "contacts",
            children: [
              {
                id: 3,
                name: "C",
                children: [
                  {
                    id: 4,
                    name: "D",
                    children: []
                  },
                  {
                    id: 5,
                    name: "E",
                    children: []
                  }
                ]
              },
            ]
          },
          {
            id: 6,
            name: "F",
            children: [
              {
                id: 7,
                name: "G",
                children: []
              },
              {
                id: 8,
                name: "H",
                children: []
              }
            ]
          },
          {
            id: 9,
            name: "I",
            children: [
              {
                id: 10,
                name: "J",
                children: []
              },
              {
                id: 11,
                name: "K",
                children: []
              }
            ]
          }  
        ]    
    },
  ],

  treeDataFlat:[
    {
      id: 6,
      name: "F",
      children:[7,8]
    },
    {
      id: 7,
      name: "G",
      children:[5]
    },
    {
      id: 8,
      name: "H",
      children:[]
    },
    {
      id: 9,
      name: "I",
      children:[10,11]
    },
    {
      id: 10,
      name: "J",
      children:[]
    },
    {
      id: 11,
      name: "K",
      children:[]
    },
    {
      id: 1,
      name: "A",
      children:[2,6,9]
    },
    {
      id: 2,
      name: "B",
      children:[3]
    },
    {
      id: 3,
      name: "C",
      children:[4]
    },
    {
      id: 4,
      name: "D",
      children:[]
    },
    {
      id: 5,
      name: "E",
      children:[]
    }
  ],
  contacts: [
    {
      id: 1,
      company: "Rapid Precision Mfg.",
      title: "Quality Engineer",
      firstName: "Dongyob",
      lastName: "Lee",
      officePh: "",
      ext: "",
      cell: "669-294-0910",
      email: "dyl4810@gmail.com"
    },
    {
      id: 2,
      company: "Facebook",
      title: "Frontend Developer",
      firstName: "Edward",
      lastName: "Simmons",
      officePh: "408-516-4662",
      ext: "003",
      cell: "669-252-4251",
      email: "edwardsimmons@gmail.com"
    },
    {
      id: 3,
      company: "Amazon",
      title: "Data Scientist",
      firstName: "Harry",
      lastName: "Davis",
      officePh: "",
      ext: "",
      cell: "408-344-2110",
      email: "harrydavis0@gmail.com"
    },
    {
      id: 4,
      company: "Google",
      title: "Googler",
      firstName: "Katherine",
      lastName: "Jones",
      officePh: "408-963-7156",
      ext: "846",
      cell: "408-828-0550",
      email: "katherinejones0@gmail.com"
    },
    {
      id: 5,
      company: "Alibaba",
      title: "Scammer",
      firstName: "Eric",
      lastName: "Brown",
      officePh: "510-663-5552",
      ext: "462",
      cell: "408-644-0110",
      email: "ericbrown@gmail.com"
    }
  ],
  contactsKeyNames:[{
    id: 'ID',
    company: "Company",
    title: "Title",
    firstName: "First Name",
    lastName: "Last Name",
    officePh: "Office",
    ext: "Ext",
    cell: "Cell",
    email: "Email"
  }],
  contactsActiveField:[{
    activeFieldKey:'',
    isUp: false
  }]
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DO_NOTHING":
      return state;
    case "CHANGE_ACTIVE_FIELD":
      const activeField = state[action.dataName+'ActiveField']
      console.log('in reducerrr first', state[action.dataName+'ActiveField'])
      activeField[0].isUp = action.isUp
      activeField[0].activeFieldKey= action.activeFieldKey
      console.log('in reducerrr', {...state, contactsActiveField: activeField})
      return JSON.parse(JSON.stringify({...state, contactsActiveField: activeField}))//return Object.assign({}, state, {contactsActiveField: activeField})

    default:
      return state;
  }
};
export default rootReducer;
