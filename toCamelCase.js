function toCamelCase(str){
    var arr=str.split('');
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]==="_"||arr[i]==="-")
        {
            arr[i+1]=arr[i+1].toUpperCase();
            arr.splice(i,1);
        }
    }
    string=arr.join("");
    return string;
}