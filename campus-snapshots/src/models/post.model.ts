export interface PostInterface {
    title: string,
    created: string,
    votes: number,
    content: string,
    tags: Array<string>, // need to add
    imgURL: string,
    postId: string, // need to add
    status?: string,
    author: string,
    inProgress: string,
    solved: string,
    type: string
};