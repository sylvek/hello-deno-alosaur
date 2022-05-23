import { App, Area, setup, handlers } from "./deps.ts";
import { HealthzController } from "./healthz/HealthzController.ts";

await setup({
  handlers: {
    console: new handlers.ConsoleHandler("DEBUG", {
      formatter: "{datetime} {levelName} {msg}",
    }),
  },
  loggers: {
    default: { level: "DEBUG", handlers: ["console"] },
  },
});

// Declare module
@Area({
  controllers: [HealthzController],
})
export class HomeArea {}

// Create alosaur application
const app = new App({
  areas: [HomeArea],
});

app.listen();
