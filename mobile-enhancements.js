(function(){
  const loadCommercialTheme=()=>{
    const theme=document.createElement('script');
    theme.src='commercial-theme.js?v=20260921';
    document.head.appendChild(theme);
  };

  const core=document.createElement('script');
  core.src='mobile-enhancements-core.js';
  core.onload=()=>{
    const fix=document.createElement('script');
    fix.src='nav-hotfix.js';
    fix.onload=loadCommercialTheme;
    fix.onerror=loadCommercialTheme;
    document.head.appendChild(fix);
  };
  core.onerror=loadCommercialTheme;
  document.head.appendChild(core);
})();