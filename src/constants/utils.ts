import { QuestIntricacy, QuestLevel } from './const';

export const getQuestLevel = (level : string) => {
  switch(level) {
    case QuestLevel.hard:
      return QuestIntricacy.Hard;
    case QuestLevel.medium:
      return QuestIntricacy.Medium;
    case QuestLevel.easy:
      return QuestIntricacy.Easy;
  }
};
