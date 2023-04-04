import { buildRoutePath } from './utils/build-route-path.js';

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/test'),
    handler: (req,res) => {
      return res.end({message: 'chegou na rota'});
    }
  }
]