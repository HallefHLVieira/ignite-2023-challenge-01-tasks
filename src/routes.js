import { buildRoutePath } from './utils/build-route-path.js';

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req,res) => {
      return res.end({message: 'rota de GET'});
    }
  },
  {
    method:'POST',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      return res.end({message: 'rota de POST'});
    }
  },
  {
    method:'PUT',
    path: buildRoutePath('/tasks/:taskId'),
    handler: (req,res) => {
      return res.end({message: 'rota de PUT'});
    }
  },
  {
    method:'DELETE',
    path: buildRoutePath('/tasks/:taskId'),
    handler: (req,res) => {
      return res.end({message: 'rota de DELETE'});
    }
  },
  {
    method:'PATCH',
    path: buildRoutePath('/tasks/:taskId/complete'),
    handler: (req,res) => {
      return res.end({message: 'rota de PATCH'});
    }
  }
]