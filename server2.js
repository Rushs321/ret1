#!/usr/bin/env node
'use strict';

import fastify from 'fastify';
import { processRequest } from './src/proxy.js'; // Import the named export

const app = fastify({ 
  logger: false // Reduced logging level for performance
          // Enable trust proxy for reverse proxies
});

const PORT = process.env.PORT || 8080;



// Main route directly linked to processRequest
app.get('/', processRequest);

app.listen({{ host: '0.0.0.0', port: PORT }, (err, address) => {
  if (err) throw err
})
