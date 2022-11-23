const { Octokit } = require('octokit');

const octokit = new Octokit({
  auth: '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',
});

test('Access a public repo with ocokit / github API', async () => {
  const res = await octokit.request('GET /repos/{owner}/{repo}', {
    owner: 'SamuelShirley',
    repo: 'HE-test-automation',
  });
  console.log(res);
  expect(res.status).toBe(200);
  expect(res.url).toBe(
    'https://api.github.com/repos/SamuelShirley/HE-test-automation'
  );
});
