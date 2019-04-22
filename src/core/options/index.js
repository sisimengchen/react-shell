export * from './routes';

export const historyMode = process.env.TARGET === 'githubpages' ? 'Hash' : 'Browser';

export const version = process.env.VERSION;

export const gtag = 'UA-138570751-1';
