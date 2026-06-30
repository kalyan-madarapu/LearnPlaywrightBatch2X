interface APIResponse{
    readonly statuscode: number; 
        body: string;
    headers?: object;
        respnseTime?:number;

}
let response :APIResponse ={
    statuscode:200,
    respnseTime:1400,
    body:'{"user":"admin"}',
}
console.log("status",response.statuscode);
console.log("body ",response.body);
console.log("header",response.headers);
//response.statuscode=400;//we will get error as read-only
response.body:"kalyan";