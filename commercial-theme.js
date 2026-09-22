(function(){
  const frame=document.getElementById('appFrame');
  if(!frame) return;

  const THEME_ID='ayvo-commercial-theme';

  function setText(el,text){if(el)el.textContent=text}

  function applyCommercialTheme(){
    const d=frame.contentDocument;
    const w=frame.contentWindow;
    if(!d||!d.head||!d.body) return;

    d.title='AYVO Gestão | Operação e Performance';
    document.title='AYVO Gestão | Operação e Performance';

    let style=d.getElementById(THEME_ID);
    if(!style){
      style=d.createElement('style');
      style.id=THEME_ID;
      style.textContent=`
      :root{
        --bg:#f5f7f9!important;
        --panel:#ffffff!important;
        --panel2:#f8fafc!important;
        --ink:#17202a!important;
        --muted:#6f7b87!important;
        --line:#e5e9ee!important;
        --line2:#d9e0e7!important;
        --dark:#111820!important;
        --dark2:#111820!important;
        --blue:#2468c9!important;
        --blue2:#1d57a8!important;
        --blue-soft:#edf4fc!important;
        --blue-line:#d8e6f7!important;
        --green:#277a50!important;
        --green-soft:#edf7f1!important;
        --amber:#9c691e!important;
        --amber-soft:#fbf5e9!important;
        --red:#a64444!important;
        --red-soft:#fbefef!important;
        --violet:#6653a7!important;
        --violet-soft:#f3f0fa!important;
        --shadow:0 1px 2px rgba(16,24,40,.035),0 4px 12px rgba(16,24,40,.025)!important;
        --shadow2:0 18px 45px rgba(16,24,40,.14)!important;
        --r:10px!important;
        --r2:8px!important;
      }
      html,body{background:var(--bg)!important;color:var(--ink)!important;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Inter,Roboto,Arial,sans-serif!important}
      body{font-size:13px!important}

      .login{
        background:#111820!important;
        grid-template-columns:minmax(0,1.08fr) minmax(420px,.92fr)!important;
      }
      .login-hero{padding:58px 64px!important;background:linear-gradient(180deg,#111820 0%,#151e28 100%)!important}
      .login-brand{gap:12px!important}
      .login-brand .brandmark{width:44px!important;height:44px!important;border-radius:10px!important;background:#18222d!important;border:1px solid rgba(255,255,255,.08)!important;box-shadow:none!important}
      .login-copy{max-width:620px!important}
      .login-copy .ey{font-size:10px!important;letter-spacing:.11em!important;color:#8eb7ed!important;font-weight:700!important}
      .login-copy h1{font-size:44px!important;line-height:1.08!important;letter-spacing:-.03em!important;margin:14px 0 17px!important;font-weight:680!important;max-width:620px!important}
      .login-copy p{font-size:15px!important;line-height:1.65!important;color:#aeb9c5!important;max-width:590px!important}
      .login-points{gap:10px!important;margin-top:28px!important}
      .login-point{border:1px solid rgba(255,255,255,.08)!important;background:rgba(255,255,255,.025)!important;border-radius:9px!important;padding:14px 15px!important}
      .login-point b{font-size:12px!important;font-weight:650!important}.login-point small{font-size:10.5px!important;color:#94a2b1!important}
      .login-foot{font-size:10.5px!important;color:#7f8c99!important}
      .login-panel{background:#fff!important;padding:44px!important;box-shadow:none!important;border-left:1px solid #e7eaee!important}
      .login-box{max-width:390px!important}
      .login-box h2{font-size:25px!important;letter-spacing:-.02em!important;font-weight:680!important;margin-bottom:7px!important}
      .login-box p{font-size:12.5px!important;line-height:1.55!important;margin-bottom:25px!important}
      .demo-note{background:#f8fafb!important;border:1px solid #e4e9ee!important;border-radius:8px!important;font-size:10px!important;padding:10px 11px!important}

      .app{grid-template-columns:248px minmax(0,1fr)!important;background:var(--bg)!important}
      aside{background:#111820!important;padding:18px 13px!important;border-right:1px solid #1d2732!important}
      .brand{padding:4px 7px 18px!important;gap:11px!important}
      .brand .brandmark{border-radius:9px!important;background:#17222d!important;box-shadow:none!important;border:1px solid rgba(255,255,255,.08)!important}
      .brand b{font-size:15px!important;font-weight:680!important;letter-spacing:-.01em!important}
      .brand small{font-size:8.5px!important;letter-spacing:.08em!important;color:#8694a2!important}
      .nav{gap:3px!important}
      .nav button{color:#aeb8c2!important;padding:10px 11px!important;border-radius:7px!important;font-size:12px!important;font-weight:520!important;transition:background .12s ease,color .12s ease!important}
      .nav button:hover{background:#18232e!important;color:#f5f7f9!important}
      .nav button.active{background:#1d2b39!important;color:#fff!important;box-shadow:inset 3px 0 0 #4a8de6!important}
      .ico,.ico svg{width:16px!important;height:16px!important}
      .side-foot{gap:8px!important}.side-card{background:#151f29!important;border:1px solid #202d39!important;border-radius:8px!important;padding:10px 11px!important}.side-card small{font-size:8.5px!important;color:#748493!important}.side-card b{font-size:10.5px!important;font-weight:600!important}

      main{padding:26px 30px 46px!important}
      .topbar{margin-bottom:19px!important;align-items:center!important}
      .topbar .ey{font-size:9px!important;letter-spacing:.08em!important;text-transform:uppercase!important;color:#687583!important;font-weight:700!important}
      .topbar h1{font-size:25px!important;line-height:1.15!important;letter-spacing:-.025em!important;margin:5px 0 4px!important;font-weight:680!important}
      .subtitle{font-size:12px!important;color:#75818d!important}
      .actions{gap:7px!important}.badge{border-radius:7px!important;padding:8px 10px!important;background:#fff!important;font-size:10px!important;font-weight:600!important;box-shadow:none!important}.avatar{width:36px!important;height:36px!important;background:#1c2732!important;font-size:9px!important;font-weight:700!important}

      .grid{gap:12px!important}.cols2,.cols3,.cols4{gap:12px!important}
      .card{border:1px solid var(--line)!important;border-radius:10px!important;box-shadow:var(--shadow)!important;padding:15px!important;background:#fff!important}
      .head{margin-bottom:12px!important}.head h2{font-size:13.5px!important;font-weight:660!important;letter-spacing:-.01em!important}.head span{font-size:9.5px!important;color:#7b8792!important}
      .stat small{font-size:10px!important;color:#74808c!important}.stat strong{font-size:25px!important;letter-spacing:-.025em!important;margin:7px 0 5px!important;font-weight:690!important}.stat em{font-size:9.5px!important;font-weight:550!important}
      .bar{height:4px!important;background:#edf1f4!important;margin-top:10px!important}.bar i{background:#3b7bd1!important;border-radius:999px!important}
      .status{border-radius:6px!important;padding:4px 7px!important;font-size:8.8px!important;font-weight:700!important;letter-spacing:.01em!important}
      .row{border-radius:8px!important;padding:10px!important;gap:10px!important;background:#fff!important;margin-bottom:7px!important}.round{width:34px!important;height:34px!important;border-radius:8px!important;background:#f0f4f8!important;color:#47617b!important;font-size:9px!important}.row b{font-size:11px!important;font-weight:630!important}.row small{font-size:9.4px!important;color:#7c8792!important}
      .metric{padding:9px 0!important}.metric span{font-size:10px!important;color:#74808b!important}.metric b{font-size:11px!important;font-weight:650!important}
      .note{border-style:solid!important;border-radius:8px!important;background:#f8fafb!important;font-size:9.7px!important;line-height:1.55!important}

      .toolbar{gap:7px!important;margin-bottom:12px!important}.toolbar input,.toolbar select{border-radius:7px!important;min-height:37px!important;background:#fff!important;font-size:11px!important}.toolbar input:focus,.toolbar select:focus{border-color:#8aafe0!important;box-shadow:0 0 0 3px rgba(36,104,201,.08)!important;outline:none!important}
      .btn{border-radius:7px!important;padding:9px 12px!important;font-size:11px!important;font-weight:620!important;box-shadow:none!important;transition:background .12s ease,border-color .12s ease!important}
      .btn:hover{background:#f6f8fa!important}.btn.primary{background:#2468c9!important;border-color:#2468c9!important;color:#fff!important;box-shadow:none!important}.btn.primary:hover{background:#1f5daf!important;border-color:#1f5daf!important}.btn.soft{background:#edf4fc!important;border-color:#d8e6f7!important;color:#245b9e!important}.btn.danger{background:#fff3f3!important;border-color:#efd5d5!important}
      .table-wrap{border-radius:8px!important;background:#fff!important}.table-wrap table{background:#fff!important}th,td{padding:10px 11px!important;font-size:10.5px!important}th{font-size:8.8px!important;letter-spacing:.055em!important;background:#f7f9fb!important;color:#74808b!important;font-weight:700!important}
      tbody tr:hover td{background:#fbfcfd!important}
      .chart{height:164px!important;gap:9px!important}.bc i{background:#4b82c9!important;border-radius:4px 4px 0 0!important}.bc span{font-size:8px!important}
      .map{gap:8px!important}.unit{border-radius:8px!important;padding:11px!important;min-height:98px!important}.unit.free{background:#fafbfc!important}.unit .n{font-size:8.5px!important}.unit b{font-size:11px!important;font-weight:640!important}.unit small{font-size:9px!important}.unit .dot{width:7px!important;height:7px!important}
      .day,.stage,.deal,.doc{border-radius:8px!important}.slot{border-radius:6px!important}.deal{background:#fafbfc!important}
      .doc .doc-title{font-weight:680!important}.qrbox{border-radius:8px!important}

      .modal-bg{background:rgba(11,18,25,.46)!important;backdrop-filter:blur(2px)!important}.modal{border-radius:11px!important;padding:16px!important;box-shadow:var(--shadow2)!important}.modal-top h3{font-size:14.5px!important;font-weight:680!important}.close{border-radius:7px!important;background:#f2f4f6!important}.field label{font-size:9.8px!important;font-weight:650!important}.field input,.field select,.field textarea{border-radius:7px!important;padding:10px 11px!important;font-size:12px!important}.field input:focus,.field select:focus,.field textarea:focus{box-shadow:0 0 0 3px rgba(36,104,201,.08)!important;border-color:#8aafe0!important}
      .toast{border-radius:8px!important;background:#17212b!important;font-size:10px!important;box-shadow:0 8px 24px rgba(16,24,40,.16)!important}
      #ayvoDemoBadge{background:#fff!important;color:#7a8591!important;border:1px solid #e1e6eb!important;border-radius:6px!important;box-shadow:none!important;font-weight:600!important;letter-spacing:0!important;font-size:9px!important;padding:6px 8px!important}

      @media(max-width:1100px) and (min-width:781px){
        .app{grid-template-columns:78px 1fr!important}
        main{padding:24px 22px 42px!important}
      }
      @media(max-width:780px){
        body{background:#f5f7f9!important}
        main{background:#f5f7f9!important;padding-top:12px!important}
        .topbar{margin-bottom:14px!important}.topbar h1{font-size:22px!important}.topbar .ey{display:none!important}.subtitle{font-size:11px!important}
        aside{background:#111820!important;border-top:1px solid #24303b!important}
        .nav button.active{background:#1b2c3d!important;box-shadow:inset 0 2px 0 #4a8de6!important}
        .card{border-radius:9px!important;padding:13px!important;box-shadow:0 1px 2px rgba(16,24,40,.03)!important}
        .stat strong{font-size:23px!important}.head h2{font-size:13px!important}
        .modal{border-radius:14px 14px 0 0!important}
        #ayvoDemoBadge{font-size:8.5px!important}
      }
      `;
      d.head.appendChild(style);
    }

    setText(d.querySelector('.login-copy .ey'),'PLATAFORMA DE GESTÃO');
    setText(d.querySelector('.login-copy h1'),'Gestão integrada para uma operação mais simples e previsível.');
    setText(d.querySelector('.login-copy p'),'Centralize financeiro, contratos, atendimento, reservas e indicadores em uma única visão operacional.');
    setText(d.querySelector('.login-box .ey'),'Acesso ao sistema');
    setText(d.querySelector('.login-box h2'),'Acesse sua operação');
    setText(d.querySelector('.login-box p'),'Entre para acompanhar a operação, o financeiro e os principais indicadores do negócio.');
    setText(d.querySelector('.demo-note'),'Ambiente demonstrativo preparado para apresentação comercial.');

    const brandName=d.querySelector('.brand b');
    const brandSub=d.querySelector('.brand small');
    setText(brandName,'AYVO Gestão');
    setText(brandSub,'Operação & Performance');

    const topEy=d.querySelector('.topbar .ey');
    setText(topEy,'AYVO GESTÃO');

    const demo=d.getElementById('ayvoDemoBadge');
    if(demo) demo.textContent='Ambiente demonstrativo';

    d.querySelectorAll('.side-card').forEach(card=>{
      const sm=card.querySelector('small');
      if(sm&&sm.textContent.trim()==='Status'){
        const b=card.querySelector('b');
        if(b){b.textContent='Operação online';b.style.color='#8fc8a7'}
      }
    });

    d.querySelectorAll('.login-point').forEach(point=>{
      point.removeAttribute('style');
    });

    if(w&&typeof w.toast==='function'&&!w.__ayvoCommercialReady){
      w.__ayvoCommercialReady=true;
    }
  }

  function scheduleApply(){
    let tries=0;
    const timer=setInterval(()=>{
      tries++;
      try{applyCommercialTheme()}catch(e){console.warn('AYVO commercial theme',e)}
      if(tries>=12||frame.contentDocument?.getElementById(THEME_ID)) clearInterval(timer);
    },120);
  }

  frame.addEventListener('load',scheduleApply);
  scheduleApply();
})();
