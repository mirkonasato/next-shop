function handleLogin(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  console.log('req.body:', req.body);
  res.status(200).json({});
}

export default handleLogin;
