import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    PostsData: [
        { id: 1, message: 'Helloy', like: 15, },
        { id: 2, message: 'Helloy, my friends', like: 0, },
    ]
}

test('new post dhold be added', () => {
    let action = addPostActionCreator("it-kamasutra.com")

    let newState = profileReducer(state, action);

    expect(newState.PostsData.length).toBe(3)
    expect(newState.PostsData[2].message).toBe("it-kamasutra.com")
});

test('after deleting length of massege', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action);

    expect(newState.PostsData.length).toBe(1)

});

test('after deleting length of massege', () => {
    let action = deletePost(1000)

    let newState = profileReducer(state, action);

    expect(newState.PostsData.length).toBe(2)

});
