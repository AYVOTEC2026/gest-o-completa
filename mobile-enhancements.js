(function(){
  const loadCommercialSuite=()=>{
    const theme=document.createElement('script');
    theme.src='commercial-theme.js?v=20260921c';
    theme.onload=()=>{
      const polish=document.createElement('script');
      polish.src='commercial-polish.js?v=20260921c';
      document.head.appendChild(polish);
    };
    theme.onerror=()=>{
      const polish=document.createElement('script');
      polish.src='commercial-polish.js?v=20260921c';
      document.head.appendChild(polish);
    };
    document.head.appendChild(theme);
  };

  const core=document.createElement('script');
  core.src='mobile-enhancements-core.js';
  core.onload=()=>{
    const fix=document.createElement('script');
    fix.src='nav-hotfix.js';
    fix.onload=loadCommercialSuite;
    fix.onerror=loadCommercialSuite;
    document.head.appendChild(fix);
  };
  core.onerror=loadCommercialSuite;
  document.head.appendChild(core);
})();