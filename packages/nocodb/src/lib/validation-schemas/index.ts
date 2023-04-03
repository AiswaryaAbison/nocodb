import { MetaTable } from '../utils/globals';
import base from './base'
import model from './model'
import project from './project';
import view from './view'

type ModelValidationObjType = {
  [key in MetaTable]?: {
    create?: any;
    update?: any;
  };
};

export const modelSchema: ModelValidationObjType = {
  [MetaTable.PROJECT]: project,
  [MetaTable.BASES]: base,
  [MetaTable.MODELS]: model,
  [MetaTable.VIEWS]: view,
};