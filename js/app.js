var SimpleListModel = function(items) {

    self = this;
    self.items = ko.observableArray(items);
    self.itemToAdd = ko.observable("");
    self.count = ko.observable(items.length);
    self.flag = ko.observable(true); //true = new task  - false = edit task
    self.indexItem = ko.observable();
    self.saveHeader = ko.observable('New Task');


    
    $("#add-btn").on('click', function () {
       console.log("ha llegado");
    });

    self.checkTask = function(){
        self.flag(false);
        self.itemToAdd(this.title);
        self.indexItem(self.items.indexOf(this));
        console.log("llega");
        self.saveHeader('Edit Task');
        return true; 
    }


    self.removeTask = function(){
      var y = self.items.indexOf(this);
      self.items.splice(y,1);
    }

    self.close = function(){
      self.itemToAdd('');
      self.saveHeader('New Task');
      self.flag(true);
      return true;
    }
  

    self.addItem = function(){
      if(self.flag()==true){
        if(self.itemToAdd() != ""){
          var date1 = new Date();
          var date = date1.getDate()+'/'+ date1.getMonth() +'/'+ date1.getFullYear();
          self.items.push({title: self.itemToAdd(), added: date});
          self.itemToAdd('');
          self.count(items.length);
          console.log("entra al if");
        }return true;          
      }
      else{
        console.log("entra al else");
        var y = self.indexItem();
        self.items.splice(y,1);
        var date1 = new Date();
        var date = date1.getDate()+'/'+ date1.getMonth() +'/'+ date1.getFullYear();
        self.items.push({title: self.itemToAdd(), added: date});
        self.itemToAdd('');
        self.count(items.length);
        self.flag(true);
        return true;
      }
    }

};
 
ko.applyBindings(new SimpleListModel([
        { title: "Comprar Pan", added: "24/06/2014" },
        { title: "Terminar trabajo", added: "13/06/2014" },
        { title: "Limpiar polvo", added: "25/06/2014" }
    ]));


