// DAY 3
const datas = [
    {
        name : 'Andi prabandaru',
        stack : 'node js',
        age : 20, 
    },
     {
        name : 'rachul',
        stack : 'react',
        age : 21, 
    },
    {
        name : 'Risky',
        stack : 'react',
        age : 22, 
    }
    ]
    datas.map((values, index ) =>{
        console.log(values)
    })  // MENAMPILKAN SEMUA DATA
    
    // // MENAMPILKAN UMUR TERBESAR 
    // datas.sort((a,b) => b.age -a.age).map((values) => console.log (values))
    
    // // UMUR TERKECIL
    // datas.sort((a,b) => a.age - b.age).map((values) => console.log (values))
    
    // // MENAMPILKAN DATA YANG LEBIH DARI 20
    // datas
    //     .sort((a,b) => a.age - b.age)
    //     .filter((x) => x.age > 20 )
    //     .map((values) => console.log (values))