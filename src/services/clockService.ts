import { Service } from "typedi";
import moment from 'moment';

@Service("clockService")
export class ClockService {
  texto: string;
  time: string;
  clockAWS: string;

  public getClock = async() => {
    this.texto = 'Horário do servidor atual:';
    this.time = moment.utc().parseZone().toString();
    this.clockAWS = this.texto + this.time;
      return this.clockAWS;
  }
}
