export interface PostInterface {
    title: string,
    date: string,
    rating: number,
    description: string,
    tags: Array<string>,
    image: string,
    postId: string,
    issueStatus?: string,
    author: string,
}