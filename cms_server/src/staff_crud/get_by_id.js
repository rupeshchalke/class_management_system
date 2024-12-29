async function main(req,res){

    const {get_pg_connection}=require('../base/pg_connector');
    let  client=await get_pg_connection();

    const {id}=req.params;

    client.query('select * from staffs WHERE id=$1;', [id],async function(err,data){
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