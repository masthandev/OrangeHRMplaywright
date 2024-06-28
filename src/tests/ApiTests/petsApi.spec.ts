import {APIRequestContext, Page ,expect, test, APIResponse} from '@playwright/test'
import * as apiConst from './apiConstants/apiConstants.json'
test.describe('pets API test cases', async () => {
 test('get all pets', async ({ request, page }) => {
    
  let response = await request.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available');
  console.log(response)
  console.log(response.status());
  console.log(response.statusText());
  
  let result1 = await JSON.parse(await response.text())
console.log(result1);

// let result =  await JSON.parse(await response.text()).value;

//    console.log(result);
//  });
 });

    test('get pet by id', async ({ request, page }) => {
    let response = await request.get('https://petstore.swagger.io/v2/pet/10');
    console.log(response.status());
    console.log(response.statusText());
    let result = await JSON.parse(await response.text());
    console.log(result);
    });
    test.only('post pet', async ({ request, page }) => {        
        let response = await request.post('https://petstore.swagger.io/v2/pet', {
            data: {
                "id": 10,
                "category": {
                    "id": 0,
                    "name": "string"
                },
                "name": "catee",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 0,
                        "name": "string"
                    }
                ],
                "status": "notAvilable"
            }
        });
        console.log(response.status());
        console.log(response.statusText());
        let result = await JSON.parse(await response.text());
        console.log(result);
    });
    test('authentication type', async ({ request, page }) => {
        let response = await request.get('https://petstore.swagger.io/v2/pet/10', {
            data: {
                Headers: {
                    'authorization': `basic "username:password", "password"`,
                }
            }
        });
       
        console.log(response.status());
        console.log(response.statusText());
        let result = await JSON.parse(await response.text());
        console.log(result);
    });
})


