import { JsonDataBaseServices, LocalDataBaseService, PostProviders } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor( private postProviders: PostProviders ) {}

    async getPosts() {
        this.posts = await this.postProviders.getPosts();

        return this.posts;
    }
}