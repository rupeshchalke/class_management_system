module.exports=function(app){

    require('./students_api')(app);
    require('./staff_api')(app);
    require('./branch_api')(app);






    
}