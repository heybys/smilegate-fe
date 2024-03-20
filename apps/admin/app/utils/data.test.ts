import { getData } from '@app/utils/data';

test('Test functions', async () => {
  const response = await getData();
  expect(response).not.toBeNull();
});
