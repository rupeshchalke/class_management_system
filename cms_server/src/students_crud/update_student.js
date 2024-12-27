async function main(req,res){

    const {get_pg_connection}=require('../base/pg_connector');
    let  client=await get_pg_connection();

    const {id} = req.params;
    let req_body= req.body;


    client.query('UPDATE students SET name=$2 WHERE id=$1', [id,req.body.name],async function(err,data){
        if(err){
            console.log("Error",err);
            res.send(`ERROR in updating the vlaue:-  ${err}`);
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