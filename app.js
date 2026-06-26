(function tick() {
  // Set target date: 25 August 2026
  const targetDate = new Date("2026-08-25T23:59:59");
  
  // Current date/time
  const now = new Date();

  // Difference in milliseconds
  const diff = targetDate - now;

  // Padding helper
  const pad = (x) => String(Math.max(0, x)).padStart(2, "0");

  if (diff > 0) {
    document.getElementById("cd-d").textContent = pad(
      Math.floor(diff / 86400000)
    );

    document.getElementById("cd-h").textContent = pad(
      Math.floor((diff % 86400000) / 3600000)
    );

    document.getElementById("cd-m").textContent = pad(
      Math.floor((diff % 3600000) / 60000)
    );

    document.getElementById("cd-s").textContent = pad(
      Math.floor((diff % 60000) / 1000)
    );
  } else {
    // Optional: when timer ends
    document.getElementById("cd-d").textContent = "00";
    document.getElementById("cd-h").textContent = "00";
    document.getElementById("cd-m").textContent = "00";
    document.getElementById("cd-s").textContent = "00";
  }

  setTimeout(tick, 1000);
})();
/* Back to top */
window.addEventListener("scroll", () =>
  document.getElementById("btt").classList.toggle("show", scrollY > 500),
);
/* Mobile drawer */
function openDrawer() {
  document.getElementById("mobileDrawer").classList.add("open");
  document.getElementById("drawerOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeDrawer() {
  document.getElementById("mobileDrawer").classList.remove("open");
  document.getElementById("drawerOverlay").classList.remove("open");
  document.body.style.overflow = "";
}
/* Track tabs */
function showTrack(id, btn) {
  document
    .querySelectorAll(".tpanel")
    .forEach((p) => p.classList.remove("on"));
  document
    .querySelectorAll(".ttab")
    .forEach((b) => b.classList.remove("on"));
  document.getElementById("tp-" + id).classList.add("on");
  btn.classList.add("on");
}
/* Committee tabs */
function showComm(id, btn) {
  document
    .querySelectorAll(".cpanel")
    .forEach((p) => p.classList.remove("on"));
  document
    .querySelectorAll(".ctab")
    .forEach((b) => b.classList.remove("on"));
  document.getElementById("c-" + id).classList.add("on");
  btn.classList.add("on");
}
/* Scroll reveal */
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.07 },
);
document.querySelectorAll(".rev").forEach((el) => io.observe(el));

      /* Nav scroll shadow */
window.addEventListener('scroll',()=>document.getElementById('Nav').classList.toggle('scrolled',scrollY>20));

/* Hamburger */
function toggleNav(){document.querySelector('.nav-links').style.display=document.querySelector('.nav-links').style.display==='flex'?'none':'';}

/* Tabs */
function tab(name,btn){
  document.querySelectorAll('.cpanel').forEach(p=>p.classList.remove('on'));
  document.querySelectorAll('.ctab').forEach(b=>b.classList.remove('on'));
  document.getElementById('p-'+name).classList.add('on');
  btn.classList.add('on');
}

/* Scroll reveal */
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('shown');obs.unobserve(e.target);}}),{threshold:0.08});
document.querySelectorAll('.rev').forEach(el=>obs.observe(el));

  // Modal functions
function openModal(trackId) {
    const modal = document.getElementById(`modal-${trackId}`);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeModal(trackId) {
    const modal = document.getElementById(`modal-${trackId}`);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore background scroll
}

// Close modal when clicking outside the content
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            const trackId = modal.id.replace('modal-', '');
            closeModal(trackId);
        });
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            const trackId = modal.id.replace('modal-', '');
            closeModal(trackId);
        });
    }
});

function toggleManipal(button) {
    const content = document.getElementById("manipalContent");

    content.classList.toggle("expanded");

    if (content.classList.contains("expanded")) {
        button.textContent = "Read Less";
    } else {
        button.textContent = "Read More";
    }
}