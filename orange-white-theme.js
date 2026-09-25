(function(){
  const frame=document.getElementById('appFrame');
  if(!frame)return;
  const STYLE_ID='ayvo-orange-white-final';
  function apply(){
    const d=frame.contentDocument;if(!d||!d.head)return;
    let s=d.getElementById(STYLE_ID);if(s)return;
    s=d.createElement('style');s.id=STYLE_ID;s.textContent=`
      :root{
        --bg:#fff8f1!important;
        --panel:#ffffff!important;
        --panel2:#fffaf6!important;
        --ink:#241b14!important;
        --muted:#7d6d62!important;
        --line:#f0dfd1!important;
        --line2:#e8d2c1!important;
        --dark:#ffffff!important;
        --dark2:#fffaf6!important;
        --blue:#f28c18!important;
        --blue2:#d96f08!important;
        --blue-soft:#fff1e2!important;
        --blue-line:#ffd5aa!important;
        --amber:#d96f08!important;
        --amber-soft:#fff0df!important;
        --shadow:0 1px 2px rgba(68,38,17,.04),0 6px 18px rgba(68,38,17,.05)!important;
      }
      html,body{background:#fff8f1!important;color:#241b14!important}
      .app{background:#fff8f1!important}
      aside{background:#ffffff!important;color:#38271c!important;border-right:1px solid #f0dfd1!important;box-shadow:8px 0 28px rgba(94,48,15,.035)!important}
      .brand b{color:#2c1d14!important}.brand small{color:#a06f49!important}
      .brand .brandmark,.login-brand .brandmark{background:#fff3e5!important;border:1px solid #ffd5aa!important;color:#d96f08!important}
      .nav-group-label{color:#bd7a43!important}
      .nav button{color:#6d5a4d!important}
      .nav button:hover{background:#fff5eb!important;color:#b75d08!important}
      .nav button.active{background:linear-gradient(90deg,#fff0df,#fff8f1)!important;color:#b85e08!important;box-shadow:inset 3px 0 0 #f28c18!important}
      .nav button.active .ico{color:#f28c18!important}
      .side-card{background:#fffaf6!important;border-color:#f0dfd1!important}.side-card small{color:#a08470!important}.side-card b{color:#4b3527!important}
      main{background:#fff8f1!important}
      .topbar{background:rgba(255,248,241,.97)!important;border-bottom:1px solid #f0dfd1!important}
      .topbar .ey{color:#d96f08!important}.topbar h1{color:#241b14!important}.subtitle{color:#806f63!important}
      .cmd-btn,.cmd-icon{background:#fff!important;border-color:#ecd8c8!important;color:#4d392b!important}
      .cmd-btn:hover,.cmd-icon:hover{background:#fff7ef!important;border-color:#f2b46d!important}
      .cmd-btn.primary{background:#f28c18!important;border-color:#f28c18!important;color:#fff!important}
      .cmd-btn.primary:hover{background:#dc7609!important}
      .cmd-user .user-avatar{background:#f28c18!important;color:#fff!important}
      .card,.exec-kpi,.row,.unit,.day,.stage,.deal,.doc,.toolbar,.table-wrap{background:#fff!important;border-color:#f0dfd1!important}
      .stat:before{background:#f28c18!important}
      .bar i,.bc i{background:linear-gradient(90deg,#f7ab52,#f28c18)!important}
      .btn.primary{background:#f28c18!important;border-color:#f28c18!important;color:#fff!important;box-shadow:none!important}
      .btn.primary:hover{background:#dc7609!important}
      .btn.soft{background:#fff1e2!important;color:#b85e08!important;border-color:#ffd5aa!important}
      .round{background:#fff1e2!important;color:#b85e08!important}
      .info{background:#fff1e2!important;color:#b85e08!important}
      .slot{background:#fff3e7!important;border-color:#ffd7af!important}
      .note{background:#fffaf6!important;border-color:#f0dfd1!important;color:#7b695c!important}
      th{background:#fff8f3!important;color:#8b6f5d!important}
      td{color:#443226!important}
      .table-wrap tbody tr:hover{background:#fffaf6!important}
      input,select,textarea{border-color:#ead7c8!important;background:#fff!important}
      input:focus,select:focus,textarea:focus{border-color:#f2a044!important;box-shadow:0 0 0 3px rgba(242,140,24,.12)!important}
      .park-hero{background:linear-gradient(120deg,#fff3e4,#fff 72%)!important;border-color:#ffd2a3!important}
      .park-hero .rule{background:#f28c18!important;color:#fff!important}
      .ops-chip{background:#fff1e2!important;border-color:#ffd5aa!important;color:#a95606!important}
      .product strong,.kpi-orange strong{color:#d96f08!important}
      .login{background:#fff8f1!important;color:#241b14!important}
      .login-hero{background:linear-gradient(145deg,#f28c18,#d96f08)!important;color:#fff!important}
      .login-copy .ey{color:#fff3e5!important}.login-copy p{color:#fff4ea!important}.login-point{background:rgba(255,255,255,.12)!important;border-color:rgba(255,255,255,.22)!important}
      .login-panel{background:#fff!important;border-left:1px solid #f0dfd1!important}
      .notification-dot{background:#f28c18!important}
      @media(max-width:1100px){aside{background:#fff!important}}
    `;d.head.appendChild(s);
  }
  frame.addEventListener('load',()=>setTimeout(apply,100));
  setTimeout(apply,150);
  setTimeout(apply,700);
})();