interface APIresposne{
    body:string;
    headers?: object;
    responseTime?:number;
}
let response1: APIresposne={
    body:'Hi',

};
let response2:APIresposne = {
    body: 'Hi',
    headers:{},
    responseTime :1400,
}

