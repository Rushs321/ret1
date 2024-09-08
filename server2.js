#!/usr/bin/env node
'use strict';

import fastify from 'fastify';
import { processRequest } from './src/proxy.js'; // Import the named export
const app = fastify();
const PORT = process.env.PORT || 8080;
app.get('/', processRequest);
app.listen({host: '0.0.0.0', port: PORT })
