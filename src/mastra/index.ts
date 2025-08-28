
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore } from '@mastra/libsql';
import { weatherWorkflow } from './workflows/weather-workflow';
import { weatherAgent } from './agents/weather-agent';
import { financialAgent } from './agents/financial-agent';

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent,financialAgent },
  storage: new LibSQLStore({
    // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db
    url: ":memory:",
  }),
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
});

// Notes
// Each lesson is broken into multiple steps
// I'll guide you through the code examples and explanations
// You can ask questions at any time
// If you ever leave and come back, use the startMastraCourse tool to pick up where you left off. Just ask to "start the Mastra course".
// Use the nextMastraCourseStep tool to move to the next step when you're ready. Just ask to "move to the next step" when you are ready.
// Use the getMastraCourseStatus tool to check your progress. You can just ask "get my course progress".
// Use the clearMastraCourseHistory tool to reset your progress and start over. You can just ask "clear my course progress".