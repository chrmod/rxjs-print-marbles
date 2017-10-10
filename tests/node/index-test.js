import { expect } from 'chai';
import Rx from 'rxjs/Rx';

import printMarbles from '../';

const parseMarbles = Rx.TestScheduler.parseMarbles.bind(Rx.TestScheduler);
const subject = marbles => printMarbles(parseMarbles(marbles));

describe('printMarbles', function () {
  it('should exist', function () {
    expect(printMarbles).to.exist;
    expect(printMarbles).to.be.a('function');
  });

  it('with no argument returns empty string', function () {
    expect(printMarbles()).to.equal('');
  });


  describe('acts as oppsite of Rx.TestScheduler.parseMarble', function () {
    it('handles stream completion', function () {
      const example = '-|';
      expect(subject(example)).to.equal(example);
    });

    it('handles stream error', function () {
      const example = '-#';
      expect(subject(example)).to.equal(example);
    });

    it('handles simple stream', function () {
      const example = '-------a---b---|';
      expect(subject(example)).to.equal(example);
    });

    xit('handles multile values stream', function () {
      const example = '(ab)-|';
      expect(subject(example)).to.equal(example);
    });
  });
});

