import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import { ClockService } from "../services/clockService";

@Service("clockController")
export class ClockController {

  private clockService: ClockService;

  public constructor(@Inject("clockService") clockService: ClockService) {
    this.clockService = clockService;
  }

  async index(req: Request, res: Response): Promise<void> {
    const clockTime = await this.clockService.getClock();
    res.status(200).json(clockTime);
  }
}
