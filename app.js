const data = ['ali', 'Vali', 'gani'];
const ism = prompt();

if(data.filter((e)=> e === ism).length > 0){
    console.log(ism);
    
}else{
    console.log('xato');
    
}