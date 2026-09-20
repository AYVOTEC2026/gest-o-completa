(function(){
  const frame=document.getElementById('appFrame');
  if(!frame) return;

  const MOBILE_CSS=`
  :root{--mobile-nav-h:76px}
  @media (max-width:780px){
    html,body{width:100%;max-width:100%;overflow-x:hidden;-webkit-text-size-adjust:100%;text-size-adjust:100%}
    body{padding:0!important}
    .login{min-height:100dvh!important;height:auto!important;display:block!important;background:#fff!important}
    .login-hero{display:none!important}
    .login-panel{min-height:100dvh!important;height:auto!important;padding:24px 18px calc(24px + env(safe-area-inset-bottom))!important;align-items:center!important}
    .login-box{width:100%!important;max-width:440px!important;margin:auto!important}
    .login-box h2{font-size:25px!important;line-height:1.15!important}
    .login-box p{font-size:13px!important;line-height:1.55!important}
    .login-box input,.login-box select,.login-box textarea{font-size:16px!important;min-height:48px!important}
    .login-box .btn{min-height:48px!important;font-size:13px!important}

    .app{display:block!important;min-height:100dvh!important;width:100%!important;overflow-x:hidden!important}
    .app.hidden{display:none!important}
    aside{position:fixed!important;left:0!important;right:0!important;bottom:0!important;top:auto!important;width:100%!important;height:auto!important;z-index:1000!important;padding:0!important;overflow:visible!important;background:rgba(14,17,20,.97)!important;backdrop-filter:blur(16px)!important;-webkit-backdrop-filter:blur(16px)!important;border-top:1px solid rgba(255,255,255,.08)!important;box-shadow:0 -10px 30px rgba(0,0,0,.18)!important}
    .brand,.side-foot{display:none!important}
    .nav{display:flex!important;grid-template-columns:none!important;gap:4px!important;width:100%!important;overflow-x:auto!important;overflow-y:hidden!important;padding:7px max(8px,env(safe-area-inset-right)) calc(7px + env(safe-area-inset-bottom)) max(8px,env(safe-area-inset-left))!important;scroll-snap-type:x proximity!important;scrollbar-width:none!important;-webkit-overflow-scrolling:touch!important;overscroll-behavior-x:contain!important}
    .nav::-webkit-scrollbar{display:none!important}
    .nav button,.nav button:nth-child(n+6){display:flex!important;flex:0 0 78px!important;min-width:78px!important;min-height:58px!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:4px!important;padding:7px 5px!important;border-radius:11px!important;text-align:center!important;scroll-snap-align:center!important;font-size:10px!important;line-height:1.05!important}
    .nav button span{display:block!important;width:100%!important;max-width:72px!important;font-size:9px!important;line-height:1.1!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}
    .nav button .ico,.nav button .ico svg{width:19px!important;height:19px!important}
    .nav button.active{background:rgba(44,124,246,.22)!important;box-shadow:inset 0 2px 0 var(--blue)!important}

    main{width:100%!important;min-width:0!important;padding:14px 12px calc(var(--mobile-nav-h) + 30px + env(safe-area-inset-bottom))!important;overflow-x:hidden!important}
    .topbar{display:flex!important;flex-direction:column!important;align-items:stretch!important;gap:12px!important;margin-bottom:16px!important}
    .topbar h1{font-size:23px!important;line-height:1.15!important;margin-top:4px!important}
    .topbar .subtitle{font-size:12px!important;line-height:1.45!important}
    .topbar .actions{width:100%!important;display:grid!important;grid-template-columns:1fr auto!important;gap:8px!important;align-items:center!important}
    .topbar .actions .badge,.topbar .actions .avatar{display:none!important}
    .topbar .actions .btn{min-height:42px!important;padding:10px 12px!important;font-size:11.5px!important}

    .grid,.cols4,.cols3,.cols2,.split{grid-template-columns:minmax(0,1fr)!important;gap:11px!important}
    .card{padding:14px!important;border-radius:14px!important;min-width:0!important;overflow:hidden!important}
    .head{align-items:flex-start!important;gap:8px!important;flex-wrap:wrap!important}
    .head h2{font-size:14px!important;line-height:1.25!important}
    .head>button{min-height:38px!important}
    .stat strong{font-size:25px!important;line-height:1.1!important;word-break:break-word!important}
    .stat small,.stat em{line-height:1.4!important}

    .row{grid-template-columns:auto minmax(0,1fr)!important;gap:10px!important;align-items:start!important;padding:11px!important}
    .row>.status,.row>button,.row>span.status{grid-column:2!important;justify-self:start!important;margin-top:1px!important}
    .row b{font-size:11.5px!important;line-height:1.3!important}
    .row small{font-size:9.8px!important;line-height:1.4!important;overflow-wrap:anywhere!important}
    .round{width:34px!important;height:34px!important}

    .metric{align-items:flex-start!important;gap:8px!important;flex-wrap:wrap!important}
    .metric span{flex:1 1 130px!important;line-height:1.35!important}
    .metric b{max-width:100%!important;text-align:right!important;line-height:1.35!important;overflow-wrap:anywhere!important}
    .metric .btn{margin-left:auto!important;min-height:34px!important;padding:8px 10px!important}

    .toolbar{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(120px,.7fr)!important;gap:8px!important;width:100%!important}
    .toolbar input{grid-column:1/-1!important;min-width:0!important;width:100%!important}
    .toolbar input,.toolbar select{font-size:16px!important;min-height:44px!important}
    .toolbar .btn{min-height:44px!important;width:100%!important}

    .table-wrap{width:100%!important;max-width:100%!important;overflow-x:auto!important;overflow-y:hidden!important;-webkit-overflow-scrolling:touch!important;overscroll-behavior-x:contain!important;border-radius:11px!important;position:relative!important}
    .table-wrap table{min-width:680px!important;width:max-content!important;max-width:none!important}
    .table-wrap th,.table-wrap td{white-space:nowrap!important;padding:10px!important;font-size:10.5px!important}
    .table-wrap .btn{min-height:36px!important;padding:8px 10px!important}

    .map{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:8px!important}
    .unit{min-height:96px!important;padding:11px!important}
    .unit b,.unit small{overflow-wrap:anywhere!important}
    .week{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:8px!important}
    .day{min-height:110px!important}
    .pipeline{grid-template-columns:minmax(0,1fr)!important;gap:9px!important}
    .chart{height:155px!important;gap:6px!important;padding-inline:2px!important}
    .bc i{width:26px!important}
    .doc{padding:13px!important}
    .doc .doc-title{font-size:14px!important;line-height:1.3!important}

    .btn{min-height:40px!important;touch-action:manipulation!important}
    .btn.full{width:100%!important}
    input,select,textarea{font-size:16px!important}

    .modal-bg{align-items:flex-end!important;padding:0!important;z-index:1100!important}
    .modal{width:100%!important;max-width:none!important;max-height:calc(100dvh - 12px)!important;border-radius:18px 18px 0 0!important;padding:16px 14px calc(14px + env(safe-area-inset-bottom))!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important}
    .modal-top{position:sticky!important;top:-16px!important;z-index:2!important;background:#fff!important;padding:14px 0 10px!important;margin-bottom:8px!important}
    .modal-top h3{font-size:16px!important;line-height:1.25!important;padding-right:8px!important}
    .close{width:42px!important;height:42px!important;flex:0 0 42px!important;font-size:21px!important}
    .form-grid{grid-template-columns:minmax(0,1fr)!important;gap:9px!important}
    .field.full{grid-column:auto!important}
    .field input,.field select,.field textarea{min-height:46px!important;font-size:16px!important}
    .field textarea{min-height:96px!important}
    .actions-row{position:sticky!important;bottom:calc(-14px - env(safe-area-inset-bottom))!important;z-index:3!important;background:#fff!important;margin:12px -14px calc(-14px - env(safe-area-inset-bottom))!important;padding:10px 14px calc(10px + env(safe-area-inset-bottom))!important;border-top:1px solid var(--line)!important;display:grid!important;grid-template-columns:1fr 1fr!important;gap:8px!important}
    .actions-row .btn{width:100%!important;min-height:45px!important}

    .toast{left:12px!important;right:12px!important;bottom:calc(var(--mobile-nav-h) + 18px + env(safe-area-inset-bottom))!important;max-width:none!important;text-align:center!important;font-size:11px!important;padding:11px 12px!important}
    #ayvoDemoBadge{left:50%!important;right:auto!important;top:auto!important;bottom:calc(var(--mobile-nav-h) + 58px + env(safe-area-inset-bottom))!important;transform:translateX(-50%)!important;white-space:nowrap!important;font-size:9px!important;padding:6px 9px!important}
  }

  @media (max-width:390px){
    .map,.week{grid-template-columns:minmax(0,1fr)!important}
    .toolbar{grid-template-columns:minmax(0,1fr)!important}
    .toolbar input,.toolbar select,.toolbar .btn{grid-column:auto!important;width:100%!important}
    .nav button,.nav button:nth-child(n+6){flex-basis:72px!important;min-width:72px!important}
    main{padding-left:10px!important;padding-right:10px!important}
    .card{padding:12px!important}
  }

  @media (max-width:780px) and (orientation:landscape){
    :root{--mobile-nav-h:68px}
    .nav button,.nav button:nth-child(n+6){min-height:50px!important;flex-basis:74px!important}
    .nav button span{font-size:8px!important}
    .modal{max-height:96dvh!important}
  }
  `;

  function injectMobile(d){
    if(!d || d.getElementById('ayvo-mobile-css')) return;
    const style=d.createElement('style');
    style.id='ayvo-mobile-css';
    style.textContent=MOBILE_CSS;
    d.head.appendChild(style);

    const nav=d.querySelector('.nav');
    if(nav){
      nav.setAttribute('aria-label','Navegação principal');
      nav.querySelectorAll('button').forEach(btn=>{
        btn.addEventListener('click',()=>{
          if(window.innerWidth<=780){
            setTimeout(()=>btn.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'}),60);
          }
        });
      });
    }

    const tables=d.querySelectorAll('.table-wrap');
    tables.forEach(wrap=>{
      wrap.setAttribute('tabindex','0');
      wrap.setAttribute('aria-label','Tabela com rolagem horizontal');
    });
  }

  function apply(){
    try{injectMobile(frame.contentDocument)}catch(err){console.error('AYVO mobile enhancement',err)}
  }

  frame.addEventListener('load',()=>setTimeout(apply,40));
  if(frame.contentDocument && frame.contentDocument.readyState==='complete') apply();
})();
