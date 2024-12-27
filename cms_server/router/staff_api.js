module.exports=function(app){


    app.post('/staff_crud/create_staff/', function(req, res){
        let y=require('../src/staff_crud/create_staff');
        y.main(req,res);
      })

      app.get('/staff_crud/delete_staff/', function(req, res){
        let y=require('../src/staff_crud/delete_staff');
        y.main(req,res);
      })

      app.get('/staff_crud/read_student/', function(req, res){
        let y=require('../src/staff_crud/read_staff');
        y.main(req,res);
      })

      app.get('/staff_crud/update_student/', function(req, res){
        let y=require('../src/staff_crud/update_staff');
        y.main(req,res);
      })

    }