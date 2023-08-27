export interface PostInterface {
    id: number; 
    title: string; 
    body: string;
    userId: number;
    tags: string[];
    reactions : number;
} 

export interface PostsInterface{
    posts: PostInterface[];
    total : number;
    skip: number;
    limit: number;
}