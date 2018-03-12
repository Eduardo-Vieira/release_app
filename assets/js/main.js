$(document).ready(function(){
    
    var dados = [];

    $.getJSON('db/note.json',function(data){
     dados = data;
     dados.forEach(el => {
         $('#list').append('<tr><td>'.concat(el.version,'</td>','<td>',el.data,'</td>','<td>',el.note,'</td>','<td>',el.descricao,'</td></tr>'));
     });
   });

   $('#btnsaveversion').click(function(){    
    dados.push({version:$("#version").val(), data:$("#data").val(), note:$("#note").val(), descricao:$("#descricao").val()});
    $.post('acoes.php',{identifier:'newversion', dados:JSON.stringify(dados)},function(data){
       window.location = '/';
    })
   })
});

