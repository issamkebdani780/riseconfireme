

export { authService } from './authService';
export { agentService } from './agentService';
export { catalogService } from './catalogService';


import { authService } from './authService';
import { agentService } from './agentService';
import { catalogService } from './catalogService';

export const clientServices = {
  ...authService,
  ...agentService,
  ...catalogService,
};
