

$$.styles('blockA', {
    bg : 'blue',
    cl : 'white',
    bd: '3px solid brown',
    h : '90px',
    w : '90px',
    pos: 'absolute',
    t: '50%',
    l : '50%',
    transform : 'translate(-50%, -50%)',
    
});



$$._styles('vn', {
    bg : 'pink',
    h : '350px',
    w : '200px',
    marginTop : '50px'

});

sh.bg('blockB', 'yellow');




   var eli = sh.el('head');

   

   eli.$fs('29px');

   $$.styles('head', {
      bg :'',
      cl : 'pink',
      pos: 'absolute',
      t : '50%',
      l : '50%',
      transform : 'translate(-50%, -50%)',
      zIndex :'1000'
   })
   var elu = sh.el('head2');
   elu.$bg('blue');
   var elup = sh.el('blockB');
   $bg(elup, 'orange');
   elup.$cl = 'purple';
   
   

   //alert(el);
//sh._el('vn');