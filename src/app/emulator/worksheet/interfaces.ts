import { WorksheetModel } from './WorksheetModel';
import { FateResult, SceneStatus } from '../shared/content';

export interface IActionDefinition {
  definition: string;
  name: string;
}

export interface IFocus {
  definition: string;
  name: string;

  selectItem(model: WorksheetModel);
}

export type WorksheetItemType = 'PC' | 'NPC' | 'Thread';

export interface IWorksheetItem {
  name: string;
  enabled: boolean;
  type: WorksheetItemType;
}

export interface IWorksheetScene {
  action: IActionDefinition;
  subject: IActionDefinition;
  focus: IFocus;
  item: IWorksheetItem;
  index: string;
  questions: IWorksheetQuestion[];
  status: SceneStatus;
}

export interface IWorksheetQuestion {
  question: string;
  result: FateResult;
}
