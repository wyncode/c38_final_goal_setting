import Moment from 'moment';
import { extendMoment } from 'moment-range';

const getCurrentMilestoneObj = (milestoneArr) => {
  const moment = extendMoment(Moment);

  const today = moment()._d;
  let rangeStart = 0;
  let rangeEnd = 1;

  while (rangeEnd < milestoneArr.length) {
    let range = moment.range(
      milestoneArr[rangeStart].dueDate,
      milestoneArr[rangeEnd].dueDate
    );

    if (range.contains(today)) {
      return {
        data: milestoneArr[rangeStart],
        index: rangeStart
      };
    }

    rangeStart++;
    rangeEnd++;
  }
  return {
    data: milestoneArr[0],
    index: 0
  };
};

export { getCurrentMilestoneObj };
