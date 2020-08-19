import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const mockAggregatorCreate = (mockAggregator: string) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fs = require('fs');
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const path = require('path');

  const aggregatedModules = {};

  fs.readdirSync(path.resolve(`./src/${mockAggregator}`))
    .filter((filename: string) => path.extname(filename) === '')
    .forEach((name: string) => {
      Object.defineProperty(aggregatedModules, name, {
        get() {
          return require(path.resolve(`./src/${mockAggregator}`, name)).default;
        },
      });
    });

  return aggregatedModules;
};

const aggregators = [''];

aggregators.forEach((mockAggregator) => {
  jest.mock(
    mockAggregator,
    () => mockAggregatorCreate(mockAggregator.replace('@', '')),
    {
      virtual: true,
    }
  );
});

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
