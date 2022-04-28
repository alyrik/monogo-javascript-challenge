import https from 'https';

async function request(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let body = '';

        res.on('data', (chunk) => {
          body += chunk;
        });

        res.on('end', () => {
          resolve(body);
        });
      })
      .on('error', (err) => {
        reject(err);
      });
  });
}

export async function loadData(url) {
  const responseData = await request(url);
  return JSON.parse(responseData);
}
