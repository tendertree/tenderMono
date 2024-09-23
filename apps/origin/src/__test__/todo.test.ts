
import { describe, it, expect, vi } from 'vitest'
import { GET, POST } from '../../app/api/todo/route'
import { NextApiRequest, NextApiResponse } from 'next'

// Mocking Next.js req and res
const mockRequest = {} as NextApiRequest;
const mockResponse = {
  status: vi.fn().mockReturnThis(),
  json: vi.fn(),
} as unknown as NextApiResponse;

// Mocking the handler (TodoImpleFile)
vi.mock('@infra/file/todo/index', () => {
  return {
    TodoImpleFile: vi.fn().mockImplementation(() => {
      return {
        ReadTodoList: vi.fn().mockResolvedValue([{ id: 1, task: 'Test Task' }]),
        AddTodo: vi.fn().mockResolvedValue(undefined),
      };
    }),
  };
});

describe('Todo API Routes', () => {
  it('GET /api/todo should return todo list', async () => {
    await GET();
    
    // Checking if response was called with the expected data
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith([{ id: 1, task: 'Test Task' }]);
  });

  it('POST /api/todo should add new todo and return success message', async () => {
    mockRequest.body = { task: 'New Task' }; // Set request body

    await POST(mockRequest);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({ msg: 'post data successfully' });
  });
});

