import cookie from 'cookie';
import { NextApiHandler } from 'next';

const handleLogout: NextApiHandler = (req, res) => {
  res.status(200)
  .setHeader('Set-Cookie', cookie.serialize('jwt', '', {
    path: '/api',
    expires: new Date(0),
  }))
  .json({});
};

export default handleLogout;
