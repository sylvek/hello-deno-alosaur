import { Controller, Get, Inject } from "../deps.ts";
import { AssignationService } from "../assignations/assignation.service.ts";

@Controller()
export class HealthzController {
  constructor(
    @Inject(AssignationService)
    private readonly assignationService: AssignationService
  ) {}
  @Get()
  text() {
    return this.assignationService.hello();
  }
}
