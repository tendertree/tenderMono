import { describe, it, expect, vi } from 'vitest';
import { GET } from '../../app/api/post/route'; // Adjust to the location of your API
import { PostCRUDImplFileSystem } from '@infra/file/blog/post'; // Adjust to your implementation
import path from 'path';

describe('PostCRUD Implementation', () => {
  const mockDataFilePath = path.join(process.cwd(), '/src/data/posts_T.json');
  const postCRUD = new PostCRUDImplFileSystem(mockDataFilePath);
  
  // Spy on the createPost method
  const createPostSpy = vi.spyOn(postCRUD, 'createPost');

  it('should call createPost with the correct data', async () => {
    const mockRequest = {
      body: {
        title: 'New Post',
        subject: 'Test Subject',
      },
    };

    const mockResponse = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };

    // Call the GET function to trigger the handler
    await GET(mockRequest as any, mockResponse as any);

    // Assert that createPost was called
    expect(createPostSpy).toHaveBeenCalledWith({
      title: 'New Post',
      subject: 'Test Subject',
    });

    // You can also assert the response
    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalledWith(expect.objectContaining({
      title: 'New Post',
      subject: 'Test Subject',
      id: expect.any(String), // Assuming an ID is generated
    }));
  });

  it('should return 400 if post data is invalid', async () => {
    const invalidRequest = {
      body: {
        title: '', // Invalid because title is empty
      },
    };

    const mockResponse = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };

    // Call the GET function with invalid data
    await GET(invalidRequest as any, mockResponse as any);

    // Assert that createPost was not called
    expect(createPostSpy).not.toHaveBeenCalled();

    // Expect a 400 response
    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Invalid post data' });
  });
});

