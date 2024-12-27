module.exports=function(app){


      app.post('/students_crud/create_student/', function(req, res){
        let x=require('../src/students_crud/create_student');
        x.main(req,res);
      })

      app.delete('/students_crud/delete_student/:id', function(req, res){
        let x=require('../src/students_crud/delete_student');
        x.main(req,res);
      })

      app.get('/students_crud/read_student/', function(req, res){
        let x=require('../src/students_crud/read_student');
        x.main(req,res);
      })

      app.put('/students_crud/update_student/:id', function(req, res){
        let x=require('../src/students_crud/update_student');
        x.main(req,res);
      })

      app.get('/students_crud/get_by_id/:id', function(req, res){
        let x=require('../src/students_crud/get_by_id');
        x.main(req,res);
      })





}