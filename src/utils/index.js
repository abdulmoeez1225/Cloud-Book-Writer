
export const setUserLocalStorage = (data) => {
    localStorage.setItem("user", JSON.stringify(data))
}

export const setUserAccessTokenLocalStorage = (data) => {
    localStorage.setItem("token", data)
}

export const getUserLocalStorage = (data) => {
    return localStorage.getItem("user", JSON.stringify(data))
}

export const getUserAccessTokenLocalStorage = (data) => {
    return localStorage.getItem("token", data)
}

export const isAuthor = (user) => user.role === 'Author';
export const isCollaborator = (user) => user.role === 'Collaborator';