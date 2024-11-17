app.get('/chinchiro', (req, res) => {
  const result = playChinchirorin();
  res.render('chinchiro', { chinchiro: result.chinchiro, message: result.message });
});

function playChinchirorin() {
  const chinchiro = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1
  ];

  const counts = chinchiro.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1;
      return acc;
  }, {});

  let message = '';

  if (Object.values(counts).includes(3)) {
      message = '役満! 三つ揃え!';
  } else if (Object.values(counts).includes(2)) {
      message = `役あり: ${Object.keys(counts).find(key => counts[key] === 1)}の目`;
  } else {
      message = '役なし';
  }

  return { chinchiro, message };
}
