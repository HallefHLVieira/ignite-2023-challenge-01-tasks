import { buildRoutePath } from './utils/build-route-path.js';
import { randomUUID } from 'node:crypto';
import { Database } from './database.js';

const database = new Database();

export const routes = [
  // CREATE TASKS
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (req,res) => {
      const {title, description} = req.body

      if(title && description){
        const task ={
          id: randomUUID(),
          title,
          description,
          completed_at: null,
          created_at: Date.now(),
          updated_at: Date.now()
        }
        
        database.insert('tasks',task);
  
        return res.writeHead(201).end();
      }
      return res.writeHead(422).end();
    }
  },
  
  // LISTS TASKS
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req,res) => {
      const tasks = database.getAll('tasks');

      return res.end(JSON.stringify(tasks));
    }
  },

  // UPDATE TASKS
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:taskId'),
    handler:(req,res) => {

      const { taskId } = req.params;
      const {title,description} = req.body;
      
      if(title && description){

        database.update('tasks', taskId, {title, description, updated_at: Date.now()});

        return res.writeHead(204).end();
      }
      return res.writeHead(422).end();
    }
  },

  // UPDATE TASKS
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/close/:taskId'),
    handler:(req,res) => {

      const { taskId } = req.params;
     
      database.update('tasks', taskId, {completed_at: Date.now()});

      return res.writeHead(204).end();
    }
  },

  // DELETE TASKS
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:taskId'),
    handler:(req,res) => {

      const {taskId} = req.params;

      database.delete('tasks', taskId);

      return res.writeHead(204).end();
    }
  }

]