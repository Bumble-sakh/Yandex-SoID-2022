const rootNode = document.querySelector('.root');
const columnCount = 3;
const elementGap = 20;

const renderWaterfall = (rootNode, columnCount, elementGap) => {
  const children = rootNode.children;
  const columns = [];
  const columnsLength = [];
  columnsLength.length = columnCount;
  columnsLength.fill(0);

  rootNode.style['display'] = 'flex';
  rootNode.style['justify-content'] = 'space-between';

  for (let c = 0; c < columnCount; c++) {
    const column = document.createElement('div');
    column.classList.add('column');

    column.style['display'] = 'flex';
    column.style['flex-direction'] = 'col';
    column.style['flex-wrap'] = 'wrap';
    column.style['flex-basis'] = '100%';
    column.style['align-content'] = ' flex-start';

    columns.push(column);
  }

  columns[0].style['margin-right'] = `${elementGap / 2}px`;
  columns[1].style['margin'] = `0 ${elementGap / 2}px`;
  columns[2].style['margin-left'] = `${elementGap / 2}px`;

  columns.forEach((column) => {
    rootNode.append(column);
  });

  while (children.length > 3) {
    const ad = children[0];
    ad.style['margin-bottom'] = `${elementGap}px`;

    const index = columnsLength.indexOf(Math.min(...columnsLength));
    columns[index].append(ad);
    columnsLength[index] += ad.clientHeight;
  }
};

renderWaterfall(rootNode, columnCount, elementGap);
