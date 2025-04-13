import request from '@/shared/services/request';

describe('GET', () => {
  test('should return 200 status', async () => {
    const req = await request.get('/status');

    expect(req.data).toHaveProperty('status');
    expect(req.data.status).toBe(200);
  });
});
