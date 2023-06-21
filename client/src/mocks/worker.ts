import { setupWorker } from 'msw';
import handlers from './handler';

const worker = setupWorker(...handlers);
export default worker;
