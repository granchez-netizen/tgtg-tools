(function(){
  var LINKS = [
    { section: 'Interview Prep' },
    { href: '/mgr-review.html',     label: 'Interview Prep & Answers', icon: '🎯' },
    { section: 'Team Operations' },
    { href: '/standup.html',        label: 'Daily Standup',            icon: '☀️' },
    { href: '/team-lead-one-to-one.html', label: 'Team Lead 1:1',     icon: '🤝' },
    { href: '/call-coach.html',     label: 'Call Coach Scorecard',     icon: '📞' },
    { section: 'Partner Intelligence' },
    { href: '/partner-health.html', label: 'Partner Health',           icon: '🏪' },
    { href: '/funnel-tracker.html', label: 'Funnel Tracker',           icon: '📊' },
    { section: 'Mission & Impact' },
    { href: '/impact-dashboard.html', label: 'Impact Dashboard',       icon: '🌍' },
    { section: 'Home' },
    { href: '/index.html',          label: 'Back to stack',            icon: '←' },
  ];

  // Build toggle button
  var btn = document.createElement('button');
  btn.id = 'nav-toggle';
  btn.setAttribute('aria-label','Menu');
  btn.innerHTML = '<span></span><span></span><span></span>';
  document.body.prepend(btn);

  // Build overlay
  var overlay = document.createElement('div');
  overlay.id = 'nav-overlay';
  document.body.prepend(overlay);

  // Build drawer
  var drawer = document.createElement('div');
  drawer.id = 'nav-drawer';

  var cur = window.location.pathname.split('/').pop() || 'index.html';

  var html = '<div class="nav-logo">';
  html += '<div class="nav-logo-mark">♻️</div>';
  html += '<div><div class="nav-logo-text">Too Good To Go</div>';
  html += '<div class="nav-logo-sub">Head of Indie Partners · OS</div></div></div>';

  LINKS.forEach(function(l){
    if(l.section){
      html += '<div class="nav-section">'+l.section+'</div>';
    } else {
      var active = l.href.includes(cur) ? ' active' : '';
      html += '<a class="nav-link'+active+'" href="'+l.href+'">';
      html += '<span class="nav-icon">'+l.icon+'</span>'+l.label+'</a>';
    }
  });

  drawer.innerHTML = html;
  document.body.prepend(drawer);

  btn.addEventListener('click', function(){
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
  });
  overlay.addEventListener('click', function(){
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  });
})();
