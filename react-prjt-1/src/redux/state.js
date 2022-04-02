import {rerenderEntireTree} from '../render'

let state = {

    profilePage: {

        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 0 },
            { id: 2, message: "It\'s my fir56657st post", likesCount: 100 },
            { id: 3, message: "It\'s my fir4tt4st post", likesCount: 1050 },
            { id: 4, message: "It\'s my fgirst post", likesCount: 0 }
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogPage: {

        messages: [
            { id: 1, message: "hi" },
            { id: 2, message: "h2i" },
            { id: 3, message: "hi3" },
            { id: 4, message: "h4i" },
            { id: 4, message: "h4i" },
            { id: 5, message: "hi5" }
        ],

        dialogs: [
            { id: 1, name: "Dimon" },
            { id: 2, name: "Andrew" },
            { id: 3, name: "Andrew" },
            { id: 4, name: "Andrew" },
            { id: 5, name: "Andrew" },
            { id: 5, name: "Andrew" }
        ]

    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 10
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();
}


export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}



export default state;