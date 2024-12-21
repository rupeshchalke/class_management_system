module.exports=function(app){


    app.post('/student_crud/create_student/', function(req, res){
        let x=require('../src/student_crud/create_student');
        x.main(req,res);
      })

      app.post('/student_crud/delete_student/', function(req, res){
        let x=require('../src/student_crud/delete_student');
        x.main(req,res);
      })

      app.post('/student_crud/read_student/', function(req, res){
        let x=require('../src/student_crud/read_student');
        x.main(req,res);
      })

      app.post('/student_crud/update_student/', function(req, res){
        let x=require('../src/student_crud/update_student');
        x.main(req,res);
      })





}