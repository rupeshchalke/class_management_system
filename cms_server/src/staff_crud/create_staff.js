async function main(req,res){

    const {get_pg_connection}=require('../base/pg_connector');
    let  client=await get_pg_connection();

    // let req_body= req.body;
    const {name,address,mobile_no,email_id,subject,role}=req.body;
    // console.log(req.body);

    client.query('INSERT INTO staff(name,address,mobile_no,email_id,subject,role) VALUES($1,$2,$3,$4,$5,$6)'
        , [name,address,mobile_no,email_id,subject,role]
        ,async function(err,data){
        if(err){
            console.log("Error",err);
            res.send(`ERROR in inserting the vlaue:-  ${err}`);
        } else{
            console.log(data.rows,'Created');
            // res.send(data.rows);
            res.send("Value Inserted Sucessfully!!");
        }
        await client.end();
    });
    
}

module.exports={
    main
}