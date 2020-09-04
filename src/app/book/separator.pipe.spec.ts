import { SeparatorPipe } from './separator.pipe';

describe('Pipe: Separator', () => {
  describe('When an invalid value is passed', () => {
    let pipe : SeparatorPipe;

    beforeEach(() => {
      pipe  = new SeparatorPipe();
    });

    it('yields the value itself', () => {
      expect(pipe.transform(null, 1)).toBeNull();
    });

    it('yields the value itself', () => {
      expect(() => pipe.transform(null, 1)).not.toThrowError();
    });
  });
});
