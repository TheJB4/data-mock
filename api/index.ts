import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { VercelRequest, VercelResponse } from '@vercel/node';

// Importar AppModule - en Vercel se compila primero, así que usamos dist
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { AppModule } = require('../dist/src/app.module');

let cachedServer: express.Application;

async function bootstrapServer(): Promise<express.Application> {
  if (cachedServer) {
    return cachedServer;
  }

  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);
  const app = await NestFactory.create(AppModule, adapter);
  
  // Habilitar CORS para que sea accesible públicamente
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.init();
  cachedServer = expressApp;
  
  return expressApp;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  try {
    const server = await bootstrapServer();
    server(req as any, res as any);
  } catch (error) {
    console.error('Error in handler:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

