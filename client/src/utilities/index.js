import Moment from 'moment';
import { extendMoment } from 'moment-range';

const getCurrentChapterObj = (chapterArr) => {
  const moment = extendMoment(Moment);

  const today = moment()._d;
  let rangeStart = 0;
  let rangeEnd = 1;

  while (rangeEnd < chapterArr.length) {
    let range = moment.range(
      chapterArr[rangeStart].dueDate,
      chapterArr[rangeEnd].dueDate
    );

    if (range.contains(today)) {
      return {
        data: chapterArr[rangeStart],
        index: rangeStart
      };
    }

    rangeStart++;
    rangeEnd++;
  }
  return {
    data: chapterArr[0],
    index: 0
  };
};

export { getCurrentChapterObj };
