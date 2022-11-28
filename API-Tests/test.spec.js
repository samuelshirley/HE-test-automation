const { Octokit } = require('octokit');
const config = require('./config');

const octokit = new Octokit({
  auth: config.key,
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
