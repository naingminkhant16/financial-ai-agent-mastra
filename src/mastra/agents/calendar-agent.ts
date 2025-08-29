import { groq } from "@ai-sdk/groq";
import { Agent } from "@mastra/core/agent";
import { LibSQLStore } from "@mastra/libsql";
import { Memory } from "@mastra/memory";
import { MCPClient } from "@mastra/mcp";

const mcp = new MCPClient({
    servers: {
        zapier: {
            url: new URL(process.env.ZAPIER_MCP_URL || '')
        }
    }
})
const mcpTools = await mcp.getTools();


export const calendarAgent = new Agent({
    name: "Calendar Agent",
    instructions: `You are a helpful assistant that schedules events using Google Calendar via Zapier.`,
    model: groq('llama3-8b-8192'),
    tools: { ...mcpTools },
    memory: new Memory({
        storage: new LibSQLStore({
            url: "file:../../calendar-memory.db",
        }),
    }),
})