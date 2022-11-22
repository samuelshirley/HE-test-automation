const { Octokit } = require('octokit');

const octokit = new Octokit({
  auth: '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',
});

test('test oktokit', async () => {
  const res = await octokit.request('GET /repos/{owner}/{repo}', {
    owner: 'SamuelShirley',
    repo: 'HE-test-automation',
  });
  expect(res.status).toBe(200);
  expect(res.url).toBe(
    'https://api.github.com/repos/SamuelShirley/HE-test-automation'
  );
});
