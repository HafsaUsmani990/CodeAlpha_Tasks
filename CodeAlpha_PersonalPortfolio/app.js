let sections = document.querySelector('.section-content');
let contactinput = document.querySelector('#info');




let observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  })
}, {threshold: 0.2});

sections.forEach(section => observer.observe(section));