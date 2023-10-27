import cookie from 'cookie';
import { NextApiHandler } from 'next';
import { fetchJson } from '../../lib/api';
import { User } from '../../lib/user';

const { CMS_URL } = process.env;

const handleLogin: NextApiHandler<User> = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  const { email, password } = req.body;
  try {
    const { jwt, user } = await fetchJson(`${CMS_URL}/auth/local`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier: email, password }),
    });
    //TODO set jwt cookie
    res.status(200)
    .setHeader('Set-Cookie', cookie.serialize('jwt', jwt, {
      path: '/api',
      httpOnly: true,
    }))
    .json({
      id: user.id,
      name: user.username,
    });
  } catch (err) {
    res.status(401).end();
  }
};

export default handleLogin;
