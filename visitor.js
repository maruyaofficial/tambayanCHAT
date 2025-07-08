
  // CountAPI-based visitor count (free, no signup)
  fetch('https://api.countapi.xyz/hit/maruya-official/visits')
    .then(res => res.json())
    .then(data => {
      document.getElementById('footer-visitor-count').textContent = `👁️ Visitors: ${data.value.toLocaleString()}`;
    })
    .catch(() => {
      document.getElementById('footer-visitor-count').textContent = '👁️ Visitors: unavailable';
    });
