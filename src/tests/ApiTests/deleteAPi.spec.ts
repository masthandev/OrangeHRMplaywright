import { test } from '@playwright/test';
import body from './apiConstants/postBody.json';

test('delete repository for gitHubApi', async ({ request }) => {
    let accessToken = "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";
    let response = await request.get('https://api.github.com/users/masthandev/repos', {
        headers: {
            "Accept": "application/vnd.github.v3+json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    });
    console.log(response.status());
    let res = await response.json();
    res.forEach((element: any) => {
       console.log(element.name);
    })

});