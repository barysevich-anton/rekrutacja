function updateDiv(){

    $.getJSON('swiper.json', function(data){
    
                var i=Math.floor(Math.random()*data.length);
            
                    
                    $('#result').append('<img src= "'+data[i].img+'" class="slider-img">');	
                        $('#result').append('<div class="title">'+'First Name:'+data[i].name+'</div>');
                        $('#result').append('<div class="content">'+'Last  Name:'+data[i].lead+'</div>');
                $('#result').append('<div class="price">'+'Email  Id:'+data[i].price+'</div>');
                    
                    
                        });
 
         }
 
