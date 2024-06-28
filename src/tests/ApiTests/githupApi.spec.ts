import {APIRequestContext ,APIRequest, test} from'@playwright/test'
import body from './apiConstants/postBody.json'

test('post methods for gitHubApi', async ({ request }) => {

let response = await request.get('https://api.github.com/user', 
{
    data: {
   headers: {
    "Accept": "application/vnd.github.v3+json",
    "content-type": "application/json",
    "Authorization": "Bearer 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"
   },
    body: {
     "name": "mastanTestUser",
     "bio": "mastanTestUser",
    }
}
})
console.log(response.status());
console.log(await response.json());
})

test('get methods for gitHubApi', async ({ request ,page}) => {
    // const headers = {
    //     "Accept": "application/vnd.github.v3+json",
    //     "content-type": "application/json",
    //     "Authorization": "Bearer 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",
        

    // }
    // await page.route('https://api.github.com/user', route => {
    //     route.continue({ headers });
    // });
    let accesToken = "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"

    let response = await request.get('https://api.github.com/user', 
    {
    data: {
       headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${accesToken}`
       },
    //     body: {
    //      "bio": "mastanTestUser test",   
    // }
    }
})
    console.log(response.status());
   let resp =  await response.json()
   console.log(resp);

});

test.only('get repository details for gitHubApi', async ({ request }) => {
    let accessToken = "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";
    let response = await request.post('https://api.github.com/user', {
        headers: {
            "Accept": "application/vnd.github.v3+json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        data: body
    });
    console.log(await response.headers());
    console.log(response.status());
    console.log(await response.json());
});