import { PostProp, PostCRUD, PostListProp } from "@entity/blog/post"
import { promises as fs } from 'fs';
import path from 'path';

//const DATA_FILE_PATH = path.join(process.cwd(), 'src/data/postlist.json');

export  class PostCRUDImplFileSystem implements PostCRUD {
    private dataFilePath: string;
	 constructor(dataFilePath: string) {
        this.dataFilePath = dataFilePath;
    }

    private async readData(): Promise<PostProp[]> {
        try {
            const data = await fs.readFile(this.dataFilePath, 'utf-8');
            return JSON.parse(data) as PostProp[];
        } catch (error) {
            console.error('Error reading data:', error);
            return [];
        }
    }

    private async writeData(posts: PostProp[]): Promise<void> {
        try {
            await fs.writeFile(this.dataFilePath, JSON.stringify(posts, null, 2));
        } catch (error) {
            console.error('Error writing data:', error);
        }
    }

     public async createPost(post: Omit<PostProp, "id">): Promise<PostProp> {
        const posts = await this.readData();
        const newPost: PostProp = {
            ...post,
            id: Date.now().toString(), // Generate a unique ID
            views: 0, // Initialize views
            likes: 0  // Initialize likes
        };
        posts.push(newPost);
        await this.writeData(posts);
        return newPost;
    }

    public async getPost(id: string): Promise<PostProp | null> {
        const posts = await this.readData();
        return posts.find(post => post.id === id) || null;
    }

    public async getAllPosts(): Promise<PostListProp> {
        const posts = await this.readData();
        return { data: posts };
    }

    public async getPostsBySubject(subject: string): Promise<PostListProp> {
        const posts = await this.readData();
        const filteredPosts = posts.filter(post => post.subject === subject);
        return { data: filteredPosts };
    }

    public async updatePost(id: string, post: Partial<PostProp>): Promise<PostProp | null> {
        const posts = await this.readData();
        const index = posts.findIndex(p => p.id === id);
        if (index === -1) return null;
        posts[index] = { ...posts[index], ...post };
        await this.writeData(posts);
        return posts[index];
    }

    public async incrementViews(id: string): Promise<PostProp | null> {
        const posts = await this.readData();
        const index = posts.findIndex(post => post.id === id);
        if (index === -1) return null;
        posts[index].views += 1;
        await this.writeData(posts);
        return posts[index];
    }

    public async incrementLikes(id: string): Promise<PostProp | null> {
        const posts = await this.readData();
        const index = posts.findIndex(post => post.id === id);
        if (index === -1) return null;
        posts[index].likes += 1;
        await this.writeData(posts);
        return posts[index];
    }

    public async deletePost(id: string): Promise<boolean> {
        const posts = await this.readData();
        const index = posts.findIndex(post => post.id === id);
        if (index === -1) return false;
        posts.splice(index, 1);
        await this.writeData(posts);
        return true;
    }
}

