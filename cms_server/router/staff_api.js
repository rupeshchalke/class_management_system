module.exports=function(app){


    app.post('/staff_crud/create_staff/', function(req, res){
        let y=require('../src/staff_crud/create_staff');
        y.main(req,res);
      })

      app.delete('/staff_crud/delete_staff/:id', function(req, res){
        let y=require('../src/staff_crud/delete_staff');
        y.main(req,res);
      })

      app.get('/staff_crud/read_staff/', function(req, res){
        let y=require('../src/staff_crud/read_staff');
        y.main(req,res);
      })

      app.put('/staff_crud/update_staff/:id', function(req, res){
        let y=require('../src/staff_crud/update_staff');
        y.main(req,res);
      })

      app.get('/staff_crud/get_by_id/:id', function(req, res){
        let y=require('../src/staff_crud/get_by_id');
        y.main(req,res);
      })

    }