import { QuestType } from '../../../types/quest-types';
import CardQuest from '../card-quest/card-quest';

type QuestListType = {
  questsList: QuestType[];
};

const QuestsList = ({ questsList }: QuestListType): JSX.Element => (
  <div className="cards-grid">
    {questsList.map((quest) => (
      <CardQuest questCard={quest} key={quest.id} />
    ))}
  </div>
);

export default QuestsList;
