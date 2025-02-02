document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    document.querySelectorAll('.content').forEach(content => {
      content.style.display = 'none';
    });
    document.getElementById(targetId).style.display = 'block';
  });
});
