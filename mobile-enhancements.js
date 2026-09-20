(function(){
  const core=document.createElement('script');
  core.src='mobile-enhancements-core.js';
  core.onload=()=>{
    const fix=document.createElement('script');
    fix.src='nav-hotfix.js';
    document.head.appendChild(fix);
  };
  document.head.appendChild(core);
})();