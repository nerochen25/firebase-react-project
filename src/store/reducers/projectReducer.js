const initState = {
    projects: [
        {id: 1, title: 'Hello1', content: 'nvm is not compatible with the npm config "prefix" option: currently set to "/usr/local"'},
        {id: 2, title: 'Hello2', content: 'nvm is not compatible with the npm config "prefix" option: currently set to "/usr/local"'},
        {id: 3, title: 'Hello3', content: 'nvm is not compatible with the npm config "prefix" option: currently set to "/usr/local"'},
    ]
}

const projectReducer = (state=initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;