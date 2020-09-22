import { ClockController } from "../controllers/clockController";
import { Container } from "typedi";

const controler = Container.get<ClockController>("clockController");
exports.handler = controler.index.bind(controler);
