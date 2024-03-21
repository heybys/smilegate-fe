import { getData } from './data';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue({ movieListResult: { totCnt: 313 } }),
  } as unknown as Response);
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('Test functions', async () => {
  const response = await getData();
  expect(response.movieListResult.totCnt).toEqual(313);
});
