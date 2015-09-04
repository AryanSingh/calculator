var calci =  {
  init: function(){
    $('#calculator .input').click(function(){
      var input;
      if(this.dataset.keyType == "digit"){
        calci.handleInput(this.dataset.digit);
      }else if (this.dataset.keyType == "operator"){
        calci.handleInput(this.dataset.operator);
      }else if (this.dataset.keyType == "delete"){
        calci.handleDelete();
      }else if (this.dataset.keyType == "equals"){
        calci.evaluateResult(); 
      }else if(this.dataset.keyType == "dot"){
        lastNumber=calci.getLastNumber();
        if (lastNumber.indexOf('.') == -1){
          if (lastNumber.length == 0){
            calci.handleInput('0');
          }
          calci.handleInput('.');
        }
      }
    });
    $('#calculator #delete').dblclick(function(){
      calci.clearResult();
      $('#preview').html('');
    }); 
    ['0','1','2','3','4','5','6','7','8','9','/','*','-','+'].forEach(function(digit){
      $(document).bind('keyup',digit,function(){
        calci.handleInput(digit);
      });
      
    });
    $(document).bind('keyup','backspace',function(){
      calci.handleDelete();
    });
    $(document).bind('keyup','shift+=',function(){
      calci.handleInput('+');
    });
    $(document).bind('keyup', '.' ,function(){
      lastNumber=calci.getLastNumber();
      if (lastNumber.indexOf('.') == -1){
        if (lastNumber.length == 0){
          calci.handleInput('0');
        }
        calci.handleInput('.');
      }
    });
    ['=','return'].forEach(function(key){
      $(document).bind('keyup',key,function(){
        calci.evaluateResult();
      });
    });
  },
  handleInput: function(input){
    $('#preview').html($('#preview').html() + input);
  },
  handleDelete: function(){
    $('#preview').html($('#preview').html().slice(0, -1));
    if($('#preview').html().length == 0){
      calci.clearResult();
    }
  },
  evaluateResult: function(){
    $('#result').html(eval($('#preview').html()));
  },
  clearResult: function(){
    $('#result').html('');
  },
  getLastNumber: function(){
    str = $('#preview').html();
    regexp = /[+\-*\/]([0-9.])*$/
    matches = str.match(regexp);
    if(matches == null){
      return str;
    } else{
      return matches[0].slice(1);
    }
  }
};
$(document).ready(function(){
  calci.init();
});