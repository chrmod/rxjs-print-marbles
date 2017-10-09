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


  it('is oposite of Rx.TestScheduler.parseMarble', function () {
    const example0 = '-|';
    expect(subject(example0)).to.equal(example0);
    const example1 = '-------a---b---|';
    expect(subject(example1)).to.equal(example1);
    const example2 = '-#';
    expect(subject(example2)).to.equal(example2);
  });
});
