(function(){
  const frame=document.getElementById('appFrame');
  if(!frame) return;

  function install(){
    const d=frame.contentDocument;
    const w=frame.contentWindow;
    if(!d||!w||d.documentElement.dataset.ayvoNavHotfix==='1') return;
    d.documentElement.dataset.ayvoNavHotfix='1';

    const style=d.createElement('style');
    style.id='ayvo-nav-hotfix';
    style.textContent=`
      @media(max-width:780px){
        .nav{z-index:1002!important;pointer-events:auto!important}
        .nav button,.nav button:nth-child(n+6){
          position:relative!important;
          z-index:1003!important;
          pointer-events:auto!important;
          touch-action:manipulation!important;
          min-height:60px!important;
        }
        .nav button *{pointer-events:none!important}
        .nav button::after{
          content:"";
          position:absolute;
          inset:-3px;
          z-index:2;
        }
      }
    `;
    d.head.appendChild(style);

    const activate=(btn)=>{
      const id=btn&&btn.dataset.view;
      if(!id) return;
      d.querySelectorAll('.nav button').forEach(b=>b.classList.toggle('active',b===btn));
      d.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===id));
      if(w.meta&&w.meta[id]){
        const title=d.getElementById('pageTitle');
        const sub=d.getElementById('pageSub');
        if(title) title.textContent=w.meta[id][0];
        if(sub) sub.textContent=w.meta[id][1];
      }
      try{w.scrollTo(0,0)}catch(_){ }
      try{btn.scrollIntoView({behavior:'auto',block:'nearest',inline:'center'})}catch(_){ }
    };

    d.querySelectorAll('.nav button[data-view]').forEach(btn=>{
      btn.addEventListener('pointerup',e=>{
        if(window.innerWidth>780) return;
        e.preventDefault();
        e.stopImmediatePropagation();
        activate(btn);
      },true);

      btn.addEventListener('touchend',e=>{
        if(window.innerWidth>780) return;
        e.preventDefault();
        e.stopImmediatePropagation();
        activate(btn);
      },{capture:true,passive:false});

      btn.addEventListener('click',e=>{
        if(window.innerWidth>780) return;
        e.preventDefault();
        e.stopImmediatePropagation();
        activate(btn);
      },true);
    });
  }

  frame.addEventListener('load',()=>setTimeout(install,0));
  if(frame.contentDocument&&frame.contentDocument.readyState==='complete') install();
})();