import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { promises as fs } from 'fs';
import path from 'path';
import { PostCRUDImplFileSystem } from '../../blog/post';
import { PostProp } from '@entity/blog/post';

const mockDataFilePath = path.join(process.cwd(), 'src/data/postlist.json');
const testCRUD = new PostCRUDImplFileSystem(mockDataFilePath);

const testPosts = [
    { id: '1', title: 'Test Post 1', content: 'Content 1', subject: 'Subject 1', views: 0, likes: 0 },
    { id: '2', title: 'Test Post 2', content: 'Content 2', subject: 'Subject 2', views: 0, likes: 0 },
];

beforeEach(async () => {
    await fs.writeFile(mockDataFilePath, JSON.stringify(testPosts, null, 2));
});

afterEach(async () => {
    try {
        await fs.unlink(mockDataFilePath);
    } catch (error) {
        console.error('Error deleting mock file:', error);
    }
});

describe('PostCRUDImplFileSystem', () => {
    it('should create a new post', async () => {
        const newPost: Omit<PostProp, "id"> = {
            title: 'New Post',
            subject: 'New Subject',
            imageUrl: 'default-image-url.jpg',
            date: new Date().toISOString(),
            description: 'New post description',
            views: 0,
            likes: 0,
        };

        const createdPost = await testCRUD.createPost(newPost);

        expect(createdPost).toHaveProperty('id');
        expect(createdPost.title).toBe(newPost.title);

        const allPosts = await testCRUD.getAllPosts();
        expect(allPosts.data).toHaveLength(3);
    });

    it('should get a post by id', async () => {
        const post = await testCRUD.getPost('1');
        expect(post).toEqual(testPosts[0]);
    });

    it('should return null for a non-existing post', async () => {
        const post = await testCRUD.getPost('non-existing-id');
        expect(post).toBeNull();
    });

    it('should get all posts', async () => {
        const allPosts = await testCRUD.getAllPosts();
        expect(allPosts.data).toHaveLength(2);
    });

    it('should filter posts by subject', async () => {
        const filteredPosts = await testCRUD.getPostsBySubject('Subject 1');
        expect(filteredPosts.data).toHaveLength(1);
        expect(filteredPosts.data[0].subject).toBe('Subject 1');
    });

    it('should update a post', async () => {
        const updatedPost = await testCRUD.updatePost('1', { title: 'Updated Post 1' });
        expect(updatedPost).toHaveProperty('title', 'Updated Post 1');

        const post = await testCRUD.getPost('1');
        expect(post?.title).toBe('Updated Post 1');
    });

    it('should increment views', async () => {
        const post = await testCRUD.incrementViews('1');
        expect(post?.views).toBe(1);
    });

    it('should increment likes', async () => {
        const post = await testCRUD.incrementLikes('1');
        expect(post?.likes).toBe(1);
    });

    it('should delete a post', async () => {
        const result = await testCRUD.deletePost('1');
        expect(result).toBe(true);

        const allPosts = await testCRUD.getAllPosts();
        expect(allPosts.data).toHaveLength(1);
    });

    it('should return false for deleting a non-existing post', async () => {
        const result = await testCRUD.deletePost('non-existing-id');
        expect(result).toBe(false);
    });
});

