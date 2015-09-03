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
      }
    });
    $('#calculator #delete').dblclick(function(){
      $('#preview').html('');
      $('#result').html('');
    }); 
    ['0','1','2','3','4','5','6','7','8','9'].forEach(function(digit){
      $(document).bind('keydown',digit,function(){
        calci.handleInput(digit);
      });
      
    });
  },
  handleInput: function(input){
    $('#preview').html($('#preview').html() + input);
  },
  handleDelete: function(){
    $('#preview').html($('#preview').html().slice(0, -1));
  },
  evaluateResult: function(){
    $('#result').html(eval($('#preview').html()));
  }
}
$(document).ready(function(){
  calci.init();
});