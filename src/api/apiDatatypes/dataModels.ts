export type pet = {

    id: number;
    category: {
        id: number;
        name: string;
    };
    name: string;
    photoUrls: string[];
    tags: [{
        id: number;
        name: string;
    }];
    status: string;
}
 export type user = {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    userStatus: number;

}